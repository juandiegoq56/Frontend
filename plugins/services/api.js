// services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  async getPartidos() {
    return await apiClient.get('/partidos/getTabla');
  },
};