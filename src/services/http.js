import axios from 'axios'

export const http = axios.create({
    //baseURL: 'http://localhost:3000/api/v1',
    baseURL: 'https://wtt-api.herokuapp.com/api/v1'
})

