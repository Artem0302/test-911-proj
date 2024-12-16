import to from 'await-to-js';
import {Dispatch, SetStateAction} from 'react';
import {useTranslation} from 'react-i18next';
import {useApi, useError} from '@shared/core';
import {TAlbum} from '../types';

interface IGetTopAlbums {
  setData: Dispatch<SetStateAction<TAlbum[]>>;
}

interface ITopAlbums {
  albums: {
    album: TAlbum[];
  };
}

export const useGetTopAlbums = () => {
  const {t} = useTranslation('common');
  const {api} = useApi();
  const {bug} = useError();

  const getTopAlbums = async ({setData}: IGetTopAlbums) => {
    try {
      const [responseError, response] = await to(
        api<ITopAlbums>('?method=tag.gettopalbums&tag=rock'),
      );

      if (responseError || !response?.albums?.album) {
        return bug(t('oops'));
      }

      setData(response.albums.album);
    } catch (error) {
      bug(t('oops'));
      setData([]);
    }
  };

  return {getTopAlbums};
};
