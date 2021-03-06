import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputScreen} from '../screens/TextInputScreen';
import {PullToRefreshScreen} from '../screens/PullToRefreshScreen';
import {CustomSectionListScreen} from '../screens/CustomSectionListScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {InfiniteScrollScreen} from '../screens/InfiniteScrollScreen';
import {SlidesScreen} from '../screens/SlidesScreen';
import {ChangeThemeScreen} from '../screens/ChangeThemeScreen';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {View} from 'react-native';

const Stack = createStackNavigator();

export const Navigation = () => {
  const navigationRef = useNavigationContainerRef();
  const {theme} = useContext(ThemeContext);

  useReduxDevToolsExtension(navigationRef);
  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // cardStyle: {backgroundColor: 'white'},
          }}>
          <Stack.Screen
            name="HomeScreen"
            options={{header: () => <></>}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Animation101Screen"
            options={{header: () => <></>}}
            component={Animation101Screen}
          />
          <Stack.Screen
            name="Animation102Screen"
            options={{header: () => <></>}}
            component={Animation102Screen}
          />
          <Stack.Screen
            name="SwitchScreen"
            options={{header: () => <></>}}
            component={SwitchScreen}
          />
          <Stack.Screen
            name="AlertScreen"
            options={{header: () => <></>}}
            component={AlertScreen}
          />
          <Stack.Screen
            name="TextInputScreen"
            options={{header: () => <></>}}
            component={TextInputScreen}
          />
          <Stack.Screen
            name="PullToRefreshScreen"
            options={{header: () => <></>}}
            component={PullToRefreshScreen}
          />
          <Stack.Screen
            name="CustomSectionListScreen"
            options={{header: () => <></>}}
            component={CustomSectionListScreen}
          />
          <Stack.Screen
            name="ModalScreen"
            options={{header: () => <></>}}
            component={ModalScreen}
          />
          <Stack.Screen
            name="InfiniteScrollScreen"
            options={{header: () => <></>}}
            component={InfiniteScrollScreen}
          />
          <Stack.Screen
            name="SlidesScreen"
            options={{header: () => <></>}}
            component={SlidesScreen}
          />
          <Stack.Screen
            name="ChangeThemeScreen"
            options={{header: () => <></>}}
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
