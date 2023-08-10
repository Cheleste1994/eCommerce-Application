import React from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type HandleChangeFn = (
  value: string,
  setEmail: SetState<string>,
  setEmailValid: SetState<boolean>,
  setCustomValidationMessage: SetState<string>,
) => void;

const RULES_EMAIL_VALIDATION = `
Validation Rules 📏
- Email address must be properly formatted (e.g., user@example.com).
- Email address must not contain leading or trailing whitespace.
- Email address must contain a domain name (e.g., example.com).
- Email address must contain an '@' symbol separating local part and domain name.
`;

export const handleEmailChange: HandleChangeFn = (
  value,
  setEmail,
  setEmailValid,
  setCustomValidationMessage,
) => {
  const trimmedValue = value.trim();
  const isValid = /^[^\s]+@[^\s]+\.[^\s]+$/.test(value);

  if (!isValid) {
    setCustomValidationMessage(RULES_EMAIL_VALIDATION);
  } else {
    setCustomValidationMessage('');
  }

  setEmail(trimmedValue);
  setEmailValid(isValid);
};

export function isValidPassword(password: string): boolean {
  let isPassword = false;
  if (password) {
    isPassword = true;
  }
  return isPassword;
}
