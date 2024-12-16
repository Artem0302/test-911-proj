export type TAlbum = {
  url: string;
  name: string;
  mbid: string;
  artist: {
    mbid: string;
    name: string;
    url: string;
  };
  image: [];
};
