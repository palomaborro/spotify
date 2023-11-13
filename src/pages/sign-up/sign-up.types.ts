export type Errors = Record<string, string>;

export interface SignUpData {
  email: string;
  newPassword: string;
  name: string;
  surname: string;
  image: File | null;
}
