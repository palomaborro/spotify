export interface ProfileData {
  email: string;
  newPassword: string;
  name: string;
  surname: string;
}

export type StringFieldsOnly<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

export const NAME_REGEX = /^[A-Za-z]+$/;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;',.\/\\])(?=.{8,})/;

export const FIELD_ERROR_MESSAGES: Record<
  keyof StringFieldsOnly<ProfileData>,
  string
> = {
  email: "Invalid email format",
  name: "Invalid name format",
  surname: "Invalid surname format",
  newPassword:
    "Your password must contain at least 8 characters, 1 uppercase letter, 1 number and 1 special character",
};
