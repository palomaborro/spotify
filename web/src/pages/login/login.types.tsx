export type Errors = {
  email?: string;
  password?: string;
  message?: string;
};

export interface ProfileData {
  email: string;
  newPassword: string;
}
