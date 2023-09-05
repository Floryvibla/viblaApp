export type PostDto = {
    id: number,
    attributes: PostDataDto & {
        owner?: {
            data?: {
                id?: number
                attributes?: OwnerPostDto
            }
        }
        medias?: {
            data?: MediaPostDto[]
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
    onLiked?: () => void
    onComment?: () => void
    onShared?: () => void
    isActiveOptionsPost?: boolean
}

export type DataPostDto = {
    data: PostDto
}

export type MimeFormatsMediaPostDto = 'video' | 'image'

export type FormatsMediaPostDto = {
    url?: string
    width?: number
    height?: number
    mime?: MimeFormatsMediaPostDto
}

export type MediaPostDto = {
    id?: number
    attributes?: FormatsMediaPostDto & {
        formats?: {thumbnail: FormatsMediaPostDto} | null
    }
}

export type PostDataDto = HeaderPostDto & {
    id?: number
    info?: string
    createdAt?: string
    medias?: {
        data?: MediaPostDto[]
    }
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