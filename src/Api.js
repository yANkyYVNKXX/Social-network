import axios from "axios"


let instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":"0c58580f-925e-41dd-a20a-f84ea59f43b2"
    }
    
})

export let getUsers = (current=1)=>instance.get(`users?page=${current}&count=${5}`)

export let getProfile = (user)=> instance.get('profile/'+user)

export let login = (email, password)=> instance.post('auth/login', {
    email,
    password
})

export let Auth = () => instance.get('auth/me')
export let Logout = ()=> instance.delete('auth/login')

export let getStatus = (user)=> instance.get('profile/status/'+user)

export let sendStatus = (status) => instance.put('profile/status',{status})