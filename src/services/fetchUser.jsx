export const FetchUser = async (accessToken) => {
  const res = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
 
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
