const RefreshToken = async () => {
  const token = localStorage.getItem("token") || null;
  const refreshToken = localStorage.getItem("refresh-token") || null;
  const object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "refresh-token": refreshToken,
    },
    body: {
      "refresh-token": refreshToken,
    },
  };

  const url = "https://books.ioasys.com.br/api/v1/auth/refresh-token";
  const result = await fetch(url, object);
  const response = await result.json();
  return response;
};

export default RefreshToken;
