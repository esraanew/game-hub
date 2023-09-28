import axios from "axios"



export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'39fdc411922e4cbdb9f91a5338bb1dec'
    }
})