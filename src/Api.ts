import axios from "axios"
import { dataAuth } from "./Redux/Auth-Reducer"
import { photos, profile, profileUPD, Users } from "./Types/Types"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f5fb66df-ad46-41c5-8be0-2f9f986c6851"
    }

})

export type response<T={}> = {
    data:T
    messages:Array<string>
    fieldsErrors:Array<string>
    resultCode:number
}

export const usersAPI = {
    getUsers: (current = 1 as number | undefined | null, term='' as string | null | undefined) => instance.get<Users>(`users?page=${current}&count=${8}&term=${term}`),
    follow: (userId:number) => instance.post(`/follow/${userId}`),
    unfollow: (userId:number)=>instance.delete(`/follow/${userId}`)
}



export const profileAPI = {
    getProfile: (user:number | null) => instance.get<profile>('profile/' + user).then(response => response.data),
    updStatus: (status:string) => instance.put<response>('profile/status', { status }).then(response => response.data),
    getStatus: (user:number | null) => instance.get<string>('profile/status/' + user).then(response => response.data),
    updPhoto: (photo:File) => instance.put<response<photos>>('profile/photo', photo, {headers:{'Content-Type':'multipart/form-data'}}).then(response => response.data),
    updAboutMe: (data:profileUPD) => instance.put<response>('profile', data).then(response => response.data)
}




interface data extends response {
    data:dataAuth
}

export const AuthAPI = {
    
    login: (email:string, password:string, rememberMe=false, captcha='') => instance.post<response<{userId:number}>>('auth/login', {
    email,
    password,
    rememberMe,
    captcha
}).then(response => response.data),
    Auth: () => instance.get<data>('auth/me').then(response => response.data),
    Logout: () => instance.delete<response>('auth/login').then(response => response.data),
}


export const securityAPI = {
    getCaptcha: () => instance.get<{url:string}>('/security/get-captcha-url').then(response => response.data)
}


