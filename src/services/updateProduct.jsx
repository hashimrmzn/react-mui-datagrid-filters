export const updateProduct = async (id, updates) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

  if (!res.ok) {
    throw new Error("Failed to update product");
  }

  return await res.json(); 
};
