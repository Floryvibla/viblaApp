import { useNavigation, useRoute } from "@react-navigation/native";
import { PublickAuthRoutesProps } from "../../Navigation/AuthStack";
import { StackAppRoutes, StackAppRoutesProps } from "../../Navigation/StackNavigation";
import { BottomTabStack } from "../../Navigation/TabBottomNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { ProfileScreenParams } from "../../Navigation/types";

export type AppRoutes = BottomTabStack & StackAppRoutes
export type AppRoutesProps = NativeStackNavigationProp<AppRoutes>

type ScreenNameProps = keyof AppRoutes
type ScreenParamsProps = AppRoutes[ScreenNameProps]


export const useScreenParams = (screen?: keyof AppRoutes) => {

    const route = useRoute()
    return route
}

export const useNavigate = () => {

    const route = useRoute()

    const [paramsScreen, setParamsScreen] = useState<AppRoutes>({})

    return {
        navigatePublic: useNavigation<PublickAuthRoutesProps>(),
        navigation: useNavigation<AppRoutesProps>()
    }
}