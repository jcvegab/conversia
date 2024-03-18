export function isUserEmailValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function UserEmailNotValidError(email: string): Error {
  return new Error(`Email ${email} is not valid`);
}
