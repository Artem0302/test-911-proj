import {StackScreenProps} from '@react-navigation/stack';
import {TAlbumInfo} from '@entities/album';

export type TMainStackParamsList = {
  'MAIN.LOGIN_SCREEN': undefined;
  'MAIN.HOME_SCREEN': undefined;
  'MAIN.SONGS_SCREEN': {artist: string; album: string};
  'MAIN.ALBUM_SCREEN': {album: TAlbumInfo};
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

export type TSongsScreenRouteProp = SongsScreenNavigationProp['route'];

//Album Screen

type AlbumScreenNavigationProp = StackScreenProps<
  TMainStackParamsList,
  'MAIN.ALBUM_SCREEN'
>;

export type TAlbumScreenRouteProp = AlbumScreenNavigationProp['route'];
