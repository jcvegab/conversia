import { UserEmailNotValidError, isUserEmailValid } from './UserEmail';
import { UserIdNotValidError, isUserIdValid } from './UserId';
import { UserImageUrlNotValidError, isUserImageUrlValid } from './UserImageUrl';
import { UserNameNotValidError, isUserNameValid } from './UserName';
import { UserPasswordNotValidError, isUserPasswordValid } from './UserPassword';

export interface User {
  id: string;
  fullName: string;
  email: string;
  imageUrl: string;
  password: string;
}

export function ensureUserIsValid({
  id,
  fullName,
  imageUrl,
  email,
  password,
}: User): void {
  if (!isUserIdValid(id)) {
    throw UserIdNotValidError(id);
  }
  if (!isUserNameValid(fullName)) {
    throw UserNameNotValidError(fullName);
  }
  if (!isUserImageUrlValid(imageUrl)) {
    throw UserImageUrlNotValidError(imageUrl);
  }
  if (!isUserEmailValid(email)) {
    throw UserEmailNotValidError(email);
  }
  if (!isUserPasswordValid(password)) {
    throw UserPasswordNotValidError(password);
  }
}
