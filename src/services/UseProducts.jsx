import { useState, useEffect } from "react";
import axios from "axios";
export default function useProducts(selectedCategory, selectname) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "https://dummyjson.com/products";

        if (selectedCategory) {
          url = `https://dummyjson.com/products/category/${selectedCategory}`;
        } else if (selectname) {
          url = `https://dummyjson.com/products/search?q=${selectname}`;
        }

        const res = await axios(url);


        setProducts(res.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectname]);

  return products;
}
