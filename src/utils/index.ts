import { Platform } from "react-native";

export const isSixDigitNumber = (str: string): boolean => {
    const regex = /^\d{6}$/; // Expressão regular para verificar 6 dígitos numéricos
    
    return regex.test(str);
};

export const HEIGHT_HEADER_FEED = Platform.OS === 'ios' ? 120 : 90