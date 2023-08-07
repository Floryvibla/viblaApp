import {
    Circle,
    vec,
    LinearGradient,
    Blur
} from "@shopify/react-native-skia";
import { Dimensions } from 'react-native';

type BackdropProps = {
    y?: number
    x?: number
    size?: number
    blur?: number
}

const { height, width } = Dimensions.get('window')
const circleSize = Math.min(height, width);

export const BlurUI = ({ 
    x = circleSize / 2, 
    y = height / 2, 
    size = 180, 
    blur = 40
}: BackdropProps) => {
  return (
    <Circle r={size ?? 180} cx={x ?? circleSize / 2} cy={y ??height / 2}>
        <LinearGradient 
            start={vec(0, 0)}
            end={vec(350, 0)}
            colors={['#41c7f0', '#4755f5', '#c947f5']}
        />
        <Blur blur={blur} />
    </Circle>
  )
}
