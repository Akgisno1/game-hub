import axios from "axios";
export default axios.create(
    {
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'8db4edd1849b47e1a2f51a09d916137d'
        }
    }
)