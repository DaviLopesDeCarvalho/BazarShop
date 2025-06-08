import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const getProductsByCategory = async (category) => {
  const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
  return response.data.products;
};


export const getProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};
