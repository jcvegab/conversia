export const NAME_MIN_LENGTH = 8;
export const NAME_MAX_LENGTH = 64;

export function isUserPasswordValid(password: string): boolean {
  const hasCorrentLength =
    password.length >= NAME_MIN_LENGTH && password.length <= NAME_MAX_LENGTH;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
    password,
  );

  return hasCorrentLength && hasNumber && hasUpperCase && hasSpecialCharacter;
}

export function UserPasswordNotValidError(password: string): Error {
  return new Error(`Password ${password} is not valid`);
}
