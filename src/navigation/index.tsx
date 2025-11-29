import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import AddPlace from './screens/AddPlaces';
import AllPlaces from './screens/AllPlaces';
import IconButton from '../components/UI/IconButton';


const RootStack = createNativeStackNavigator({
  screens: {

    AllPlaces: {
      screen: AllPlaces,
      options: ({ navigation }: { navigation: any }) => ({
        title: 'All Places',
        headerRight: ({ tintColor }: { tintColor?: string }) => (
          <IconButton icon="add" size={24} color={tintColor} 
            onPress={() => {
              navigation.navigate('AddPlace');
            }} />
        ),
      }),
    },
    AddPlace: {
      screen: AddPlace,
      options: {
        title: 'Add New Place',
      },
    }
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
