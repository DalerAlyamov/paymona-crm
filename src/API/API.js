import axios from 'axios'

const API = axios.create({
  // baseURL: `http://192.168.0.112:5000/v1`
  baseURL: `https://api.demo.paymona.com/v1`
  // baseURL: `http://10.84.29.13/v1`
})

export default API