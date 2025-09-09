import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import IconButton from "@mui/material/IconButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CircularProgress from "@mui/material/CircularProgress";


async function fetchImageAsDataURL(url) {
  if (!url) return null;
  try {
    const res = await fetch(url, { mode: "cors" });
    if (!res.ok) throw new Error("Image fetch failed");
    const blob = await res.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.warn("fetchImageAsDataURL error", url, err);
    return null;
  }
}

export default function PdfGenerator({ products = [], fileName = "products.pdf" }) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!products || products.length === 0) {
      alert("No products to export.");
      return;
    }

    try {
      setLoading(true);

  
      const productsWithImages = await Promise.all(
        products.map(async (p) => {
          const url = p.images?.[0] ?? null;
          const imgData = url ? await fetchImageAsDataURL(url) : null;
          return { ...p, __imgData: imgData };
        })
      );

    
      const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();

      doc.setFontSize(14);
      doc.text("Products Export", pageWidth / 2, 30, { align: "center" });

    
      const head = [
        ["ID", "Image", "Name", "Price", "Description", "Availability", "Brand", "Discount %"],
      ];

   
      const body = productsWithImages.map((p) => [
        p.id ?? "",
        p, 
        p.title ?? "",
        p.price != null ? `$${p.price}` : "",
        p.description ?? "",
        p.availabilityStatus ?? "",
        p.brand ?? "",
        p.discountPercentage != null ? String(p.discountPercentage) : "",
      ]);

     
      autoTable(doc, {
        startY: 50,
        head,
        body,
        styles: { fontSize: 9, cellPadding: 6, overflow: "linebreak" },
        didDrawCell: function (data) {
        
          if (data.column.index === 1 && data.cell.section === "body") {
            const product = data.cell.raw; 
            if (product && product.__imgData) {
              const imgData = product.__imgData;
              const padding = 4;
              const maxSize = Math.min(data.cell.width, data.cell.height) - padding * 2;
              const dim = Math.min(maxSize, 40);
              const x = data.cell.x + (data.cell.width - dim) / 2;
              const y = data.cell.y + (data.cell.height - dim) / 2;

              let format = "PNG";
              try {
                const mime = imgData.substring(5, imgData.indexOf(";"));
                if (mime) format = mime.split("/")[1].toUpperCase();
              } catch (e) {}

              try {
                doc.addImage(imgData, format, x, y, dim, dim);
              } catch (err) {
                console.warn("Image add failed", err);
              }
            }
          }
        },
        margin: { top: 60, left: 20, right: 20, bottom: 40 },
      });

     
      doc.save(fileName);
    } catch (err) {
      console.error("PDF generation failed", err);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <IconButton
      className="pdf-btn"
      onClick={handleGenerate}
      disabled={loading}
      sx={{
        p: 0,
        outline: "none !important",
        boxShadow: "none !important",
        "&:focus": { outline: "none !important", boxShadow: "none !important" },
        "&:active": { outline: "none !important", boxShadow: "none !important" },
      }}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: "red" }} />
      ) : (
        <PictureAsPdfIcon sx={{ color: "red", fontSize: 28 }} />
      )}
    </IconButton>
  );
}
