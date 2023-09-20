import { isValidInput } from "../utils/utils";

export const handleInputChange = <T, E>(
  e: React.ChangeEvent<HTMLInputElement>,
  field: keyof T,
  setData: React.Dispatch<React.SetStateAction<T>>,
  setError: React.Dispatch<React.SetStateAction<E>>,
  fieldErrorMessages: Record<string, string>,
  regex?: RegExp
) => {
  const value = e.target.value;

  setData((prevData) => ({ ...prevData, [field]: value }));

  if (regex) {
    if (isValidInput(value, regex)) {
      setError((prevError) => ({
        ...prevError,
        [field]: undefined,
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        [field]: fieldErrorMessages[field as string],
      }));
    }
  }
};
