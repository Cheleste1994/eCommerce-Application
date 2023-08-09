export function isValidEmail(email: string): boolean {
  let isEmail = false;
  if (email) {
    isEmail = true;
  }
  return isEmail;
}

export function isValidPassword(password: string): boolean {
  let isPassword = false;
  if (password) {
    isPassword = true;
  }
  return isPassword;
}
