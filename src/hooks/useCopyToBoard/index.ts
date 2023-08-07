import { useState } from "react";
import { Share } from "react-native";
import * as Clipboard from 'expo-clipboard';

export  function useCopyToBoard({ msg, text = 'Copiar' }: {msg: string, text?: string}) {

    const [copy, setCopy] = useState({
        state: false,
        text, 
        msg
    })

    const handleCopyToBoard = () => {
        setCopy({...copy, state: true,text: 'Copiado'})
        setTimeout(() => {
          setCopy({...copy, state: false, text: 'Copiar'})
        }, 3000);
    }
    
    const openShareDialogAsync = () => {    
        Share.share({
          message: copy.msg.toString()
        })
    };
    
    const copyToClipboard = () => {
        Clipboard.setStringAsync(copy.msg);
        Clipboard.getStringAsync()
        .then(text => handleCopyToBoard())
        .catch(err => console.log(err))
    };
    
  return {
    copyToClipboard,
    copyData: copy,
    openShareDialogAsync
  }
}