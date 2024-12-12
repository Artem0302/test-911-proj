import {createStackNavigator} from '@react-navigation/stack';
import {AlbumScreen} from '@screens/album-screen';
import {HomeScreen} from '@screens/home-screen';
import {LoginScreen} from '@screens/login-screen';
import {SongsScreen} from '@screens/songs-screen';
import React from 'react';

import {
  DISABLED_HEADER_STYLE_CONFIG,
  HEADER_STYLE_CONFIG,
} from '@shared/constants';
import {TMainStackParamsList} from '@shared/types';

const Main = createStackNavigator<TMainStackParamsList>();

export function MainNavigator() {
  return (
    <Main.Navigator initialRouteName={'MAIN.LOGIN_SCREEN'}>
      <Main.Screen
        name="MAIN.LOGIN_SCREEN"
        component={LoginScreen}
        options={{
          ...DISABLED_HEADER_STYLE_CONFIG,
        }}
      />
      <Main.Screen name="MAIN.HOME_SCREEN" component={HomeScreen} />
      <Main.Screen
        name="MAIN.SONGS_SCREEN"
        component={SongsScreen}
        options={{
          ...DISABLED_HEADER_STYLE_CONFIG,
        }}
      />
      <Main.Screen
        name="MAIN.ALBUM_SCREEN"
        component={AlbumScreen}
        options={{
          ...DISABLED_HEADER_STYLE_CONFIG,
        }}
      />
    </Main.Navigator>
  );
}
