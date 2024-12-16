import to from 'await-to-js';
import {Dispatch, SetStateAction, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useApi, useError} from '@shared/core';
import {TAlbum} from '../types';

interface IGetTopAlbums {
  setData: Dispatch<SetStateAction<TAlbum[] | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface ITopAlbums {
  albums: {
    album: TAlbum[];
  };
}

export const useGetTopAlbums = ({setData, setLoading}: IGetTopAlbums) => {
  const {t} = useTranslation('common');
  const {api} = useApi();
  const {bug} = useError();
  const [page, setPage] = useState(0);

  const getTopAlbums = async (newPage?: number) => {
    try {
      setLoading(true);

      const [responseError, response] = await to(
        api<ITopAlbums>(
          `?method=tag.gettopalbums&tag=rock&page=${newPage ?? 1}`,
        ),
      );

      if (responseError || !response?.albums?.album) {
        return bug(t('oops'));
      }

      if (!newPage) {
        setPage(1);

        return setData(response.albums.album);
      }

      setData(state => [...(state ?? []), ...response.albums.album]);
    } catch (error) {
      bug(t('oops'));
      setData(undefined);
    } finally {
      setLoading(false);
    }
  };

  const fetchNewData = async () => {
    setPage(page + 1);
    await getTopAlbums(page + 1);
  };

  return {getTopAlbums, fetchNewData};
};
