import axios from 'axios'

const API = axios.create({
  baseURL: `http://192.168.0.121:8000/v1`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default API