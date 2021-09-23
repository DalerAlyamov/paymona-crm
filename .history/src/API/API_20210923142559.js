import axios from 'axios'

const API = axios.create({
  baseURL: `psu.paymona,com/v1`,
  baseURL: `http://`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default API