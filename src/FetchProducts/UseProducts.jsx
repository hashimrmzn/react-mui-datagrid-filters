import { useState, useEffect } from 'react';

export default function useProducts(selectedCategory, selectname) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = 'https://dummyjson.com/products'; 

    if (selectedCategory) {
      url = `https://dummyjson.com/products/category/${selectedCategory}`;
    } else if (selectname) {
      url = `https://dummyjson.com/products/search?q=${selectname}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []); 
        console.log(data);
      })
      .catch(err => console.error(err));
  }, [selectedCategory, selectname]);

  return products;
}
