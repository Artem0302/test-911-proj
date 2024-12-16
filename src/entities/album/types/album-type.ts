export type TImage = {
  '#text': string;
  size: string;
};

export type TArtist = {
  mbid: string;
  name: string;
  url: string;
};

export type TAlbum = {
  url: string;
  name: string;
  mbid: string;
  artist: TArtist | string;
  image: TImage[];
};
