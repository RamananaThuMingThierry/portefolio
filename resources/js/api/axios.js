import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, 
  headers: {
    Accept: "application/json",
  },
});

// ✅ Gestion erreurs 401
api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);


export default api;
