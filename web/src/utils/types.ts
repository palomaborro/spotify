export interface ProfileData {
  email: string;
  newPassword: string;
  name: string;
  surname: string;
  image: string | File | null | undefined;
}

export type UserType = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  role: string;
};

export type ArtistType = {
  _id: string;
  name: string | null;
  image: string | File | null;
  description: string | null;
  imagePreviewUrl?: string | null;
};

export type AlbumType = {
  _id: string;
  artist: {
    _id: string;
  };
  description: string;
  image: string | File | null;
  title: string;
  year: number | string;
};

export type SongType = {
  _id: string;
  number: number | string;
  name: string;
  song: string | File | null;
  artist: string;
  album: string;
};
