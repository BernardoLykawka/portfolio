import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});

export default api;