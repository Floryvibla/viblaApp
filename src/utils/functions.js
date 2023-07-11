import AsyncStorage from "@react-native-async-storage/async-storage";

export function searchToObject(routerUrl) {
  var pairs = routerUrl.substring(2).split("&"),
    obj = {},
    pair,
    i;

  for ( i in pairs ) {
    if ( pairs[i] === "" ) continue;

    pair = pairs[i].split("=");
    obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
  }

  return obj;
}
export function validaEmail(value) {
  if (value !== '') {
    const usuario = value.substring(0, value.indexOf('@'));
    const dominio = value.substring(value.indexOf('@') + 1, value.length);

    if (usuario.length >= 1 && dominio.length >= 3 && usuario.search('@') === -1
      && dominio.search('@') === -1 && usuario.search(' ') === -1 && dominio.search(' ') === -1
      && dominio.search('.') !== -1 && dominio.indexOf('.') >= 1 && dominio.lastIndexOf('.') < dominio.length - 1) {
      return true;
    }

    return false;
  }

  return true;
}

export function readMore(text, numberOfText= 38, ) {
  return text?.length > numberOfText ?  `${text?.slice(0, numberOfText)}...`: text
}
export function randNumber(from, to) {
  return Math.floor(Math.random() * to) + from
}

export function formatBytes(bytes, decimals = 2, onlySize=false) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const result = parseFloat((bytes / Math.pow(k, i)).toFixed(dm))

  return onlySize ? result : result  + ' ' + sizes[i];
}

export function searchItems(msg, textInput) {
  const index = msg.toLowerCase().indexOf(textInput.toLowerCase())
  const result = msg.slice(index).slice(0, textInput.length)

  return result
}

// export function matchMentionsAndHashtag(textInput) {
//   let data={
//     mentions: false,
//     hashtang: false
//   }
//   if (/(?<=#).*?(?=( |$))/g.test(textInput)) {
//     data={
//       mentions: false,
//       hashtang: true
//     }
//   } else if(/(?<=@).*?(?=( |$))/g.test(textInput)) {
//     data={
//       mentions: true,
//       hashtang: false
//     }
//   }
//   else {
//     data={
//       mentions: false,
//       hashtang: false
//     }
//   }
//   return data
// }

export const getToken = async (callback) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@vibla/auth')
    const data = JSON.parse(jsonValue)
    // console.log(data);
    return data !== null ? data : false;
  } catch(error) {
    console.log(error);
  }
}

export const tokenUserex = async () => {
  const response = await getToken()
  const data = response
  return data
}



export const formatDate = (dateUser) => {
  const formatDate = new Date(dateUser)
  const time = formatDate.toLocaleTimeString().split(":")[0] + ":" + formatDate.toLocaleTimeString().split(":")[1]

  const date = formatDate.toLocaleDateString()

  return {
    time,
    date
  }
}

export function formatDate2(date) {
  var dateSplit = date.split('-');
  return dateSplit[2] + '/' + dateSplit[1] + '/' + dateSplit[0];
}