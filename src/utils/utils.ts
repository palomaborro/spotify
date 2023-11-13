export const isValidInput = (value: string, regex: RegExp) => {
  return regex.test(value);
};
