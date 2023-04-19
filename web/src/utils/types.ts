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
};
