const axios = require("axios");

const BASE_URL = "http://localhost:5000/api";
//const BASE_URL = "https://wish-hut-api.herokuapp.com/api";




export const publicRequest = axios.create({
  baseURL: BASE_URL,
});


export const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

