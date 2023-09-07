import { Pressable, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Wrapper } from '../styles'
import { colors } from '../../Constants/styles';
import ButtonAction from '../Button';
import { useDispatch } from 'react-redux';
import { othersActions } from '../../redux/actions/others.actions';
import TextUI from '../Text';
import { useNavigate } from '../../hooks/useNavigate';
import { Modalize } from 'react-native-modalize';

const ModalConfirmOrder = ({ openModal = false, onCloseModal } : {openModal:boolean, onCloseModal?: () => void}) => {

    const dispatch = useDispatch()
    const { navigation } = useNavigate()
    const [loading, setLoading] = useState(false)

    const modalizeRef = useRef(null);

    function handleConfirm() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            onCloseModal && onCloseModal()
            navigation.navigate("payment")
        }, 1500);
    }
    

    useEffect(() => {
        if (openModal) {
          modalizeRef.current?.open();
        }else{
          modalizeRef.current?.close();
        }
    }, [openModal])

  return (
    <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        onClose={onCloseModal}
        modalStyle={{
            backgroundColor: colors.bgModalDark
        }}
    >
        <Wrapper
            style={{paddingHorizontal: 20}}
        >
            <TextUI variant='title'>Confirmar o pedido</TextUI>
            <View 
                style={{width: "100%", marginTop:30, borderBottomWidth: 0.2, borderColor: colors.transparenteGray, paddingBottom: 8}}
            >
                <Text size={16} mb={5} start sub>Data e horário</Text>
                <Wrapper
                    // direction={""}
                    widthStyle={"100%"}
                    justify={"flex-start"}
                    align={"flex-start"}
                    marginTop={0}
                    marginBottom={0}
                    // initial
                    // style={{flexDirection: "row"}}
                >
                    <View
                        style={{flexDirection: "row", alignItems: "center"}}
                    >
                        <Ionicons name="calendar-outline" size={15} color={colors.gold} style={{marginRight: 5}} />
                        <TextUI>22 sep 2022</TextUI>
                    </View>
                    <View
                        style={{flexDirection: "row", alignItems: "center"}}
                    >
                        <Ionicons name="stopwatch-outline" size={15} color={colors.gold} style={{marginRight: 5}} />
                        <TextUI>19:00 - 22:00</TextUI>
                    </View>
                </Wrapper>
            </View>

            <View 
                style={{width: "100%", marginTop: 15, borderBottomWidth: 1, borderColor: colors.lightGray, paddingBottom: 8}}
            >
                <Text size={16} mb={5} start sub>Local</Text>
                <Wrapper
                    // direction={""}
                    widthStyle={"100%"}
                    justify={"flex-start"}
                    align={"flex-start"}
                    marginTop={0}
                    marginBottom={0}
                    // initial
                    style={{flexDirection: "row"}}
                >
                    <Feather name="map-pin" size={15} color={colors.gold} style={{marginRight: 5}} />
                    <View>
                        <TextUI>Sesc 24 de maio</TextUI>
                        <TextUI color={"darkGray"}>Rua 24 de Maio, 109, Centro, São Paulo.</TextUI>
                    </View>
                </Wrapper>
            </View>

            <View 
                style={{width: "100%", marginTop: 15, borderBottomWidth: 1, borderColor: colors.lightGray, paddingBottom: 8}}
            >
                <Text size={16} mb={5} start sub>Forma de pagamento</Text>
                <Wrapper
                    // direction={""}
                    widthStyle={"100%"}
                    justify={"flex-start"}
                    align={"flex-start"}
                    marginTop={0}
                    marginBottom={0}
                    // initial
                    style={{flexDirection: "row"}}
                >
                    <MaterialIcons name="attach-money" size={22} color={colors.gold} style={{marginRight: 5}} />
                    <View style={{width: "92%", justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>
                        <TextUI>Pix</TextUI>
                        <TextUI weight={'bold'} color='gold'>R$ 25,00</TextUI>
                    </View>
                </Wrapper>
            </View>

            <Wrapper widthStyle={"100%"} marginBottom={0}>
                <ButtonAction loading={loading} onPress={handleConfirm} btnmb={0} title={"Confirmar e pagar"} />
            </Wrapper>
        </Wrapper>
    </Modalize>
    
  )
}

export default ModalConfirmOrder