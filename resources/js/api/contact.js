import api from './axios';

export const contactApi = {
  async send(payload) {
    const res = await api.post("/contact/send", payload);
    return { data: res.data, message: res.data.message };
  },
};
