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
  artist: ArtistType;
  description: string;
  image: string | File | null;
  title: string;
  year: number;
};
