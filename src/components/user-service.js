import { myAxios } from "../services/helper"

export const signup=data=>{
    return myAxios.post('/api/v1/auth/register',data).then(response=>response.data)
}