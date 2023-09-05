export type AppContextDto = {
    modal?: ModalDto
    showHeader?: boolean
}

export type ModalDto = {
    displayName?: ModalDisplayname | boolean;
    data?: any;
    isOpenModal?: boolean;
}

export type ModalDisplayname = 'selfpost' | ''