export function isUserIdValid(id: string): boolean {
  const regexExp =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return regexExp.test(id);
}

export function UserIdNotValidError(id: string): Error {
  return new Error(`Id ${id} is not valid`);
}
