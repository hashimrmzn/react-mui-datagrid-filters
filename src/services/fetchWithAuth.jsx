 import { store } from "../app/store";
export async function fetchWithAuth(url, options = {}) {
  const state = store.getState();
  let accessToken = state.auth.accessToken;
  let refreshToken = state.auth.refreshToken;


  let res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (res.status === 401 && refreshToken) {
    const refreshRes = await fetch("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: refreshToken,
        expiresInMins: 30,
      }),
    });

    if (!refreshRes.ok) {
      throw new Error("Session expired. Please login again.");
    }

    const newTokens = await refreshRes.json();


    store.dispatch({
      type: "auth/updateTokens",
      payload: {
        accessToken: newTokens.accessToken,
        refreshToken: newTokens.refreshToken,
      },
    });

    res = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${newTokens.accessToken}`,
      },
    });
  }

  return res;
}
