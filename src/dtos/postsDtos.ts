export type PostDto = {
    id: number,
    attributes: {
         
        owner?: {
            data?: {
                id?: number
                attributes?: OwnerPostDto
            }
        }
    }
}

export type OwnerPostDto = {
    username?: string
    email?: string
    name?: string
    url_avatar?: string
    is_verified?: boolean
    is_founder?: boolean
}

export type HeaderPostDto =  OwnerPostDto & {
    onPressDot?: () => void
    isActiveOptionsPost?: boolean
}

export type DataPostDto = {
    data: PostDto
}

export type PostDataDto = HeaderPostDto & {
    info?: string
    createdAt?: string
    // images:
    comments?: {
        data?: any[]
    } 
    shared_posts?: {
        data?: any[]
    } 
    liked_posts?: {
        data?: any[]
    }
    onPressPost?: () => void
}