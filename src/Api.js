import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7ed368ad-c8e9-4f1a-840f-f7bdb7ef63a0"
    }

})

export const getUsers = (current = 1, term='') => instance.get(`users?page=${current}&count=${4}&term=${term}`)

export const getProfile = (user) => instance.get('profile/' + user)

export const login = (email, password, rememberMe=false, captcha='') => instance.post('auth/login', {
    email,
    password,
    rememberMe,
    captcha
})

export const Auth = () => instance.get('auth/me')
export const Logout = () => instance.delete('auth/login')

export const getStatus = (user) => instance.get('profile/status/' + user)

export const sendStatus = (status) => instance.put('profile/status', { status })

export const sendAboutMe = (data) => instance.put('profile', data)

export const sendPhoto = (photo) => instance.put('profile/photo', photo, {headers:{'Content-Type':'multipart/form-data'}})

export const getCaptcha = () => instance.get('/security/get-captcha-url')
