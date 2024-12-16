type TImage = {
  '#text': string;
  size: string;
};

export type TAlbum = {
  url: string;
  name: string;
  mbid: string;
  artist: {
    mbid: string;
    name: string;
    url: string;
  };
  image: TImage[];
};
