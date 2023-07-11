import { Pressable, View, Dimensions, Platform } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ListArea, Text, Wrapper } from '../styles'
import { colors } from '../../Constants/styles';
import ButtonAction from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { othersActions } from '../../redux/actions/others.actions';
import CardListSerie from '../Cards/CardListSerie';
import { my_series } from '../../mocks/db.json'
import { Modalize } from 'react-native-modalize';

const ListMySerie = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [listInSeries, setlistInSeries] = useState([])

    const { height: HEIGHT } = Dimensions.get('window')
    const modalizeRef = useRef(null);
    const { openModal, contentDisplayModal } = useSelector(state => state.others)

    useEffect(() => {
        if (openModal) {
            modalizeRef.current?.open();
        }else{
            modalizeRef.current?.close();
        }
    }, [openModal])

    function onSelectSerie(item) {
        if (listInSeries.filter(i => i?.id === item.id).length > 0) {
            const newList = listInSeries.filter(i => i?.id !== item.id)
            setlistInSeries(newList)
        } else {
            setlistInSeries([...listInSeries, item])
            setTimeout(() => {
                dispatch(othersActions.closeModal())
            }, 100);
        }
    }

    const renderHeader= () => (
        <CardListSerie ph={20} mb={20} add title={"Criar uma serie"} />
    )

    const renderPost= ({ item, index } ) => (
        <CardListSerie 
            pv={5} 
            ph={20} 
            active={listInSeries.filter(i => i?.id === item.id).length > 0} 
            onPress={() => onSelectSerie(item)} 
            cover={item.cover} 
            title={item.title} 
        />
    )

  return (
    <Modalize
        snapPoint={Platform.OS === "ios" ? HEIGHT / 1.75 : HEIGHT / 1.50}
        modalHeight={Platform.OS === "ios" ? HEIGHT / 1.75 : HEIGHT / 1.50}
        ref={modalizeRef}
        modalStyle={{backgroundColor: "#3b3b3b"}}
        onClose={() => dispatch(othersActions.closeModal())}
        HeaderComponent={
            <Wrapper
                initial
                widthStyle="100%"
                center
                style={{marginTop: 20, marginBottom: 20}}
            >
                <Text>Adicionar uma serie</Text>
            </Wrapper>
        }
        flatListProps={{
            data: my_series,
            renderItem: renderPost,
            keyboardDismissMode: item => item.id,
            showsVerticalScrollIndicator: false,
            ListHeaderComponent: renderHeader,
            // ItemSeparatorComponent: () => <View style={{height: 10}} />
        }}
    />
  )
}

export default ListMySerie