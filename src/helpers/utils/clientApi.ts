import axios from 'axios'

const baseURL = 'https://localhost:44383/'

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
  },
})
axiosInstance.interceptors.response.use(
  (response: any) =>
    new Promise((resolve, reject) => {
      resolve(response)
    }),
  (error: any) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
    return new Promise((resolve, reject) => {
      reject(error)
    })
  }
)

export default axiosInstance
