import {
    Canvas,
    RoundedRect,
    useImage,
    Image,
    Group,
    rrect,
    rect,
    Fill,
    useFont,
    Text
} from "@shopify/react-native-skia";
import { Dimensions } from 'react-native';
import { BlurUI } from './BlurUI';
import { colors } from '../../Constants/styles';

type BackdropProps = {
    imgProfile?: string
    qrcodeImg?: string
    nameUser?: string
}

const { height, width } = Dimensions.get('window')
const divisor = 2
const sizeW = 1.5
const sizeH = 2.2
const cardWidth = width / sizeW
const cardHeight = height / sizeH
const cardX = (width - width / sizeW) / divisor;
const cardy = (height - height / sizeH) / divisor;

const circleProfile = {
    size: 100,
    radius: 50,
    x: cardX + (cardWidth - 100) / 2,
    y: cardy - (100 / 2)
}

const imgProfileSkia = {
    size: circleProfile.size,
    x: circleProfile.x + (circleProfile.size - circleProfile.size) / 2,
    y: (circleProfile.y) 
}

export const qrcodeImgSkia = {
    size: cardWidth / 1.4,
    x: (width - cardWidth / 1.4) / 2, // Centralizar horizontalmente
    y: (height - cardHeight / 1.7) / 2 // Centralizar verticalmente
}

const fontNameUserSkia = {
    x: (qrcodeImgSkia.size * 2) / 2, // Centralizar horizontalmente
    y: qrcodeImgSkia.size + qrcodeImgSkia.y + 40 // Centralizar verticalmente
}

export const Backdrop = ({ 
    imgProfile,
    qrcodeImg
}: BackdropProps) => {

    const imgDefault = useImage(require('../../Assets/images/profile_default.png'))
    const sourceImgProfile = imgProfile ? useImage(imgProfile) : imgDefault
    const qrcodeUmgSource = useImage(qrcodeImg)

    const font = useFont(require('../../Assets/fonts/Roboto-Bold.ttf'), 23)

    const roundedRect = rrect(
        rect( 
            circleProfile.x, circleProfile.y, circleProfile.size, circleProfile.size 
        ), 
        circleProfile.radius, circleProfile.radius
    );

  return (
    <Canvas style={{flex: 1}}>
        <BlurUI y={height / 5} x={1}/>
        <BlurUI y={100} x={300} size={100}/>
        <BlurUI x={300} y={height / 1.2} size={150}/>
        <BlurUI x={200} y={height / 1.1} size={100}/>
    </Canvas>
  )
}