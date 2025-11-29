import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import AddPlace from './screens/AddPlaces';
import AllPlaces from './screens/AllPlaces';
import IconButton from '../components/UI/IconButton';

export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = NavigationContainerProps & {
  screenOptions?: NativeStackNavigationOptions;
  [key: string]: any;
};

export function Navigation({ screenOptions, ...navProps }: Props) {
  return (
    <NavigationContainer {...navProps}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }) => ({
            title: 'All Places',
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                size={24}
                color={tintColor}
                onPress={() => {
                  // navigation type is inferred from generic, keep any for safety
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (navigation as any).navigate('AddPlace');
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{ title: 'Add New Place' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
