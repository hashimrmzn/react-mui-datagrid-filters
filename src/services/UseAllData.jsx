import { useState, useEffect } from "react";
import axios from "axios";

export default function useAllData() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://dummyjson.com/products";
        const res = await axios.get(url); 
        setAllCategories(res.data.products || []); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return allCategories;
}
