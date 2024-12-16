type TImage = {
  '#text': string;
  size: string;
};

interface IArtist {
  mbid: string;
  name: string;
  url: string;
}

export type TAlbum = {
  url: string;
  name: string;
  mbid: string;
  artist: IArtist | string;
  image: TImage[];
};
