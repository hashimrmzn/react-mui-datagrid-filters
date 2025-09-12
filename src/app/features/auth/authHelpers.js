
export const saveAuthToLocalStorage = (authState) => {
  localStorage.setItem("auth", JSON.stringify(authState));
};


export const loadAuthFromLocalStorage = () => {
  try {
    const auth = localStorage.getItem("auth");
    if (!auth) return null;
    return JSON.parse(auth);
  } catch (e) {
    console.error("Error loading auth", e);
    return null;
  }
};


export const clearAuthFromLocalStorage = () => {
  localStorage.removeItem("auth");
};
