export const login = async (username, password) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, expiresInMins: 30 }),
  });

  if (!res.ok) {
    throw new Error("Invalid username or password");
  }

  const data = await res.json();

  return {
    user: {
      id: data.id,
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      image: data.image,
    },
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  };
};
