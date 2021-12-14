const signInApi = async (login, pass) => {
  const email = login;
  const password = pass;

  const object = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, refreshToken: "12341234" }),
  };
  const url = `https://books.ioasys.com.br/api/v1/auth/sign-in`;

  const result = await fetch(url, object);
  const response = await result.json();
  if (result.status === 200) {
    localStorage.setItem("token", result.headers.get("Authorization"));
    localStorage.setItem("refresh-token", result.headers.get("refresh-token"));
    return response;
  } else if (
    result.status === 400 ||
    result.status === 401 ||
    result.status === 500
  ) {
    return response;
  }
  return response;
};

export default signInApi;
