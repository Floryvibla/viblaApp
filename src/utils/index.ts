import { Platform } from "react-native";

export const isSixDigitNumber = (str: string): boolean => {
    const regex = /^\d{6}$/; // Expressão regular para verificar 6 dígitos numéricos
    
    return regex.test(str);
};

export const HEIGHT_HEADER_FEED = Platform.OS === 'ios' ? 120 : 90

export function addOrRemoveValue(list: string[], value: string): string[] {
    const index = list.indexOf(value);
  
    if (index === -1) {
      // The value is not in the list, so we add it.
      list.push(value);
    } else {
      // The value is already in the list, so we remove it.
      list.splice(index, 1);
    }
  
    return list;
}

  