export type AppContextDto = {
    modal?: ModalDto
    showHeader?: boolean
}

export type ModalDto = {
    displayName?: ModalDisplayname[];
    data?: any;
    isOpenModal?: boolean;
}

export type ModalDisplayname = 'selfpost' | 'comment'