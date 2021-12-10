const signInApi = async (login, pass) => {
  const email = login;
  const password = pass;

  const object = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  const url = `https://books.ioasys.com.br/api/v1/auth/sign-in`;

  const result = await fetch(url, object);
  const response = await result.json();
  console.log(response);
  return response;
};

export default signInApi;
