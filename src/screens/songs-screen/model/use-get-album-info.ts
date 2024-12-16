import to from 'await-to-js';
import {Dispatch, SetStateAction} from 'react';
import {useTranslation} from 'react-i18next';
import {TAlbumInfo} from '@entities/album';
import {useApi, useError} from '@shared/core';

interface IGetTopAlbums {
  setData: Dispatch<SetStateAction<TAlbumInfo | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface IGetAlbumInfoRequest {
  album: TAlbumInfo;
}

interface IGetAlbumInfo {
  album: string;
  artist: string;
}

export const useGetAlbumInfo = ({setData, setLoading}: IGetTopAlbums) => {
  const {t} = useTranslation('common');
  const {api} = useApi();
  const {bug} = useError();

  const getAlbumInfo = async ({album, artist}: IGetAlbumInfo) => {
    try {
      setLoading(true);

      const [responseError, response] = await to(
        api<IGetAlbumInfoRequest>(
          `?method=album.getinfo&artist=${artist}&album=${album}`,
        ),
      );

      if (responseError || !response?.album) {
        return bug(t('oops'));
      }

      return setData(response.album);
    } catch (error) {
      bug(t('oops'));
      setData(undefined);
    } finally {
      setLoading(false);
    }
  };

  return {getAlbumInfo};
};
