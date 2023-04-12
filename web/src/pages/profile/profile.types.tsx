export interface ProfileData {
  email: string;
  newPassword: string;
  name: string;
  surname: string;
  image: string | File | null;
}

export type Errors = Record<string, string>;
