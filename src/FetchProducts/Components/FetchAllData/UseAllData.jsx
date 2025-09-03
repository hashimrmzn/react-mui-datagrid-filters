import { useState, useEffect } from 'react';

export default function UseAllData() {
  const [AllCategories,setAllCategories]=useState([]);

  useEffect(() => {
    let url = 'https://dummyjson.com/products'; 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAllCategories(data.products)
        console.log(data)
        })
    
      .catch(err => console.error(err));
  }, []);

  return AllCategories;
}


export function ProductTable() {

  return (
    <div>
      <h3>Products</h3>

    </div>
  );
}
