import axios from "axios";

import { API_BASE_URL } from "./constant";

const fetchProducts = slug => axios.get(`${API_BASE_URL}/products/${slug}`);

const productsApi = { fetchProducts };

export default productsApi;
