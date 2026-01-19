import axios from "axios";

const fetchProduct = slug => axios.get(`products/${slug}`);
const fetchAllProducts = () => axios.get("products");

const productsApi = { fetchProduct, fetchAllProducts };

export default productsApi;
