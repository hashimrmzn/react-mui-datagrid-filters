import { fetchWithAuth } from "./fetchWithAuth";

export const FetchUser = async () => {
  const res = await fetchWithAuth("https://dummyjson.com/auth/me", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Invalid Token");
  }

  const data = await res.json();

  return {
    user: {
      id: data.id,
      username: data.username,
      email: data.email,
      firstname: data.firstName,
      lastname: data.lastName,
      gender: data.gender,
      image: data.image,
    },
  };
};
