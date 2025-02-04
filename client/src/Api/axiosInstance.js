import axios from "axios"
export const axiosInstance=axios.create({
    baseURL:"http://localhost:8000/blog_management_api",
    Headers:{
        "content-type":"application/json"
    }
})