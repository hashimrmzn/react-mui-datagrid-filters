import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import IconButton from "@mui/material/IconButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CircularProgress from "@mui/material/CircularProgress";

export default function PdfGenerator({ products = [], fileName = "products.pdf" }) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!products || products.length === 0) {
      alert("No products to export.");
      return;
    }

    try {
      setLoading(true);

      const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Connect Solution", pageWidth / 2, 40, { align: "center" })
      doc.setFont("helvetica", "normal");
      doc.text("Products List", pageWidth / 2, 60, { align: "center" });

      const head = [
        ["ID", "Name", "Price", "Description", "Availability", "Brand", "Discount %"],
      ];

      const body = products.map((p) => [
        p.id ?? "",
        p.title ?? "",
        p.price != null ? `$${p.price}` : "",
        p.description ?? "",
        p.availabilityStatus ?? "",
        p.brand ?? "",
        p.discountPercentage != null ? String(p.discountPercentage) : "",
      ]);

      autoTable(doc, {
        startY: 80,
        head,
        body,
        styles: { fontSize: 9, cellPadding: 6, overflow: "linebreak" },
        margin: { top: 60, left: 20, right: 20, bottom: 40 },
        didDrawPage: (data) => {
          const pageSize = doc.internal.pageSize;
          const pageHeight = pageSize.getHeight();
          const pageWidth = pageSize.getWidth();

          const pageNumber = doc.internal.getCurrentPageInfo().pageNumber;
          const totalPagesExp = "{total_pages_count_string}";

          doc.setFontSize(10);
          doc.text(
            `${pageNumber} / ${totalPagesExp}`,
            pageWidth - 40,
            pageHeight - 20
          );
        },
      });


      if (typeof doc.putTotalPages === "function") {
        doc.putTotalPages("{total_pages_count_string}");
      }


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
