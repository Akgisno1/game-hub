import axios from "axios";
export default axios.create(
    {
        baseURL:'https://api.rawg.io/api/',
        params:{
            key:'20d147566c444d18a77ff38bca0d1652'
        }
    }
)