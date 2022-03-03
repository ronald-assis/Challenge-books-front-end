const signInApi = async (login, pass) => {
  const email = login;
  const password = pass;

  const object = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  const url = `https://books.ioasys.com.br/api/v1/auth/sign-in`;
  try {
    const result = await fetch(url, object);
    const response = await result.json();
    localStorage.setItem("refresh-token", result.headers.get("refresh-token"));
    localStorage.setItem("token", result.headers.get("Authorization"));
    return response;
  } catch (error) {
    const result = await fetch(url, object);
    return console.log(result.status);
  }
};

export default signInApi;
