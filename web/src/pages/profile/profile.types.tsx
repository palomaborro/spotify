export interface ProfileData {
  email: string;
  password: string;
  name: string;
  surname: string;
  image: File | null;
}

export type Errors = Record<string, string>;
