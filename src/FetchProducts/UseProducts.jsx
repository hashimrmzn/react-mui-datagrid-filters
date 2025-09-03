import { useState, useEffect } from 'react';

export default function useProducts(selectedCategory) {
  console.log(`this is selected category :${selectedCategory}`)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url = 'https://dummyjson.com/products'; 

    if (selectedCategory) {
    
       url = `https://dummyjson.com/products/category/${selectedCategory}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        console.log(data)
        })
    
      .catch(err => console.error(err));
  }, [selectedCategory]);

  return products;
}
