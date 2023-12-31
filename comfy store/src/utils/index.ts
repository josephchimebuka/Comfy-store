import axios from "axios";

const productionURL =  'https://strapi-store-server.onrender.com/api'

export const fetchURL= axios.create({
    baseURL: productionURL
})



export const formatPrice= (price:number) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100));
    return dollarsAmount;
  };

  