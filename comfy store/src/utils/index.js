import axios from "axios";

const productionURL =  'https://strapi-store-server.onrender.com/api'

export const fetchURL= axios.create({
    baseURL: productionURL
})