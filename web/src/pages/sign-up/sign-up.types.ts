export type Errors = Record<string, string>;

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  surname: string;
  image: File | null;
}
