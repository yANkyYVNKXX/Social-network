export type post = {
    id: number
    text: string
}

export type contacts = {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
}
export type Users = {
    items:Array <users>,
    totalCount: number,
  }
  
export type photos = {
    small: string | null
    large: string | null
}

export type users =  {
    name: string
    id: number
    photos: {
      small: null | string
      large: null | string
    },
    status: null | string
    followed: boolean
  }

export type profile = {
        aboutMe: string
        contacts: contacts
        lookingForAJob: boolean
        lookingForAJobDescription: string | null
        fullName: string
        userId: number
        photos: photos
}

export type profileUPD = {
    aboutMe: string
    contacts: contacts
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
}