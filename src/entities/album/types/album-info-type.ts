import {TArtist, TImage} from './album-type';

type TTag = {
  name: string;
  url: string;
};

export type TTrack = {
  artist: TArtist;
  duration: number;
  name: string;
  url: string;
};

export type TAlbumInfo = {
  artist: string;
  image: TImage[];
  listeners: number;
  mbid: string;
  name: string;
  playcount: number;
  tags: {
    tag: TTag[];
  };
  tracks: {
    track: TTrack[];
  };
  url: string;
  wiki: {
    content: string;
    published: string;
    summary: string;
  };
};
