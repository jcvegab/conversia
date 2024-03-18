export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 60;

export function isUserNameValid(name: string): boolean {
  return name.length >= NAME_MIN_LENGTH && name.length <= NAME_MAX_LENGTH;
}

export function UserNameNotValidError(name: string): Error {
  return new Error(`Name ${name} is not valid`);
}
