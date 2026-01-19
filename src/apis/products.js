import axios from "axios";

const fetchProduct = slug => axios.get(`products/${slug}`);
const fetchAllProducts = params => axios.get("products", { params });

const productsApi = { fetchProduct, fetchAllProducts };

export default productsApi;
