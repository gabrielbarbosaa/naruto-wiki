import axios from "axios";

const instance = axios.create({
  baseURL: 'https://narutodb.xyz/api/',
  timeout: 60000,
  insecureHTTPParser: true,
  headers: {
    accept: 'application/json'
  },
});

export const api = instance;