import {StackScreenProps} from '@react-navigation/stack';

export type TMainStackParamsList = {
  'MAIN.LOGIN_SCREEN': undefined;
  'MAIN.HOME_SCREEN': undefined;
  'MAIN.SONGS_SCREEN': undefined;
  'MAIN.ALBUM_SCREEN': undefined;
};

//Login Screen
type LoginScreenNavigationProp = StackScreenProps<
  TMainStackParamsList,
  'MAIN.LOGIN_SCREEN'
>;

export type TLoginScreenNavProp = LoginScreenNavigationProp['navigation'];

//Home Screen

type HomeScreenNavigationProp = StackScreenProps<
  TMainStackParamsList,
  'MAIN.HOME_SCREEN'
>;

export type THomeScreenNavProp = HomeScreenNavigationProp['navigation'];

//Songs Screen

type SongsScreenNavigationProp = StackScreenProps<
  TMainStackParamsList,
  'MAIN.SONGS_SCREEN'
>;

export type TSongsScreenNavProp = SongsScreenNavigationProp['navigation'];

//Album Screen

type AlbumScreenNavigationProp = StackScreenProps<
  TMainStackParamsList,
  'MAIN.ALBUM_SCREEN'
>;

export type TAlbumScreenNavProp = AlbumScreenNavigationProp['navigation'];
