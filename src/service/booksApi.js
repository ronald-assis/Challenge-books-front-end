const booksApi = async (page) => {
  const token = localStorage.getItem("token") || null;
  const Myobject = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://books.ioasys.com.br/api/v1/books?page=${page}&amount=12&category=biographies`;
  const result = await fetch(url, Myobject);
  const response = await result.json();
  return response;
};

export default booksApi;
