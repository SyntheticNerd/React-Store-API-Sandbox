const fetchJSON = async (url) => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  console.log(response);
  return response;
};

export const getProducts = () => {
  console.log("getting");
  return fetchJSON("https://fakestoreapi.com/products");
};
