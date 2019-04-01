import axios from 'axios'

export const http = axios.create({
    //baseURL: 'http://localhost:3000/api/v1',
    baseURL: 'http://wtt-api.herokuapp.com/api/v1'
})

