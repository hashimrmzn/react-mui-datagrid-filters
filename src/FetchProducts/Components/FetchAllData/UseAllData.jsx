import { useState, useEffect } from "react";

export default function useAllData() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://dummyjson.com/products";
        const res = await fetch(url);
        const data = await res.json();

        setAllCategories(data.products || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return allCategories;
}
