import { myAxios } from "../services/helper"

export const signup=data=>{
    return myAxios.post('/api/v1/auth/register',data)
    .then(response=>{
        console.log(response)
        return response.data
    })
}


export const loginUser= (user)=>{
    return myAxios.post('/api/v1/auth/login',user).then(response=>{
        console.log(response)
        return response.data
    })
}