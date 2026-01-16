import axios from "axios";

const fetchProducts = slug => axios.get(`products/${slug}`);

const productsApi = { fetchProducts };

export default productsApi;
