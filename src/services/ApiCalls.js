import axios from "axios";

const BASE_URL = "https://reqres.in/api/users";

export const getRequest=async()=>{
   return await axios.get(BASE_URL);
}