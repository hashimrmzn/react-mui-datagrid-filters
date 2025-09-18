export const updateProduct = async (id, updates) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
  const updatedata=await res.json();
  console.log(updatedata);
    return updatedata;
  } catch (error) {
    console.error("Update product error:", error);
    throw error;
  }
};
