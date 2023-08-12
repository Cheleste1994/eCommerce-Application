import React from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type HandleChangeFn = (
  value: string,
  set: SetState<string>,
  setValid: SetState<boolean>,
  setCustomValidationMessage: SetState<string>,
) => void;

const RULES_EMAIL_VALIDATION = `
Validation Rules 📏
- Email address must be properly formatted (e.g., user@example.com).
- Email address must not contain leading or trailing whitespace.
- Email address must contain a domain name (e.g., example.com).
- Email address must contain an '@' symbol separating local part and domain name.
`;

const RULES_PASSWORD_VALIDATION = `
Password Validation Rules 📏
- Password must be at least 8 characters long.
- Password must contain at least one uppercase letter (A-Z).
- Password must contain at least one lowercase letter (a-z).
- Password must contain at least one digit (0-9).
- Password must contain at least one special character (e.g., !@#$%^&\\*).
- Password must not contain leading or trailing whitespace.
`;

const MIN_LENGTH_PASSWORD = 8;

export const handleEmailChange: HandleChangeFn = (
  value,
  setEmail,
  setEmailValid,
  setCustomValidationMessage,
) => {
  const isValid = /^[^\s]+@[^\s]+\.[^\s]+$/.test(value);

  if (!isValid) {
    setCustomValidationMessage(RULES_EMAIL_VALIDATION);
  } else {
    setCustomValidationMessage('');
  }

  setEmail(value);
  setEmailValid(isValid);
};

export const handlePasswordChange: HandleChangeFn = (
  value,
  setPassword,
  setPasswordValid,
  setCustomValidationMessage,
) => {
  const isValid =
    value.length >= MIN_LENGTH_PASSWORD &&
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])\S.*\S$/.test(value);

  if (!isValid) {
    setCustomValidationMessage(RULES_PASSWORD_VALIDATION);
  } else {
    setCustomValidationMessage('');
  }
  setPassword(value);
  setPasswordValid(isValid);
};

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  const target = e.target as HTMLFormElement;
  const formData = new FormData(target);
  const formDataObject = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  console.log(formDataObject);
  e.preventDefault();
};
