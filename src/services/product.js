import axios from "axios";

import { API_BASE_URL } from "./constant";

export const fetchProducts = async product => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${product}`);
    console.log("Fetched products:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
