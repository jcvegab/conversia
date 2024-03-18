export function isUserImageUrlValid(imageUrl: string): boolean {
  if (!imageUrl.length) return true;
  const regexExp =
    /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;
  return regexExp.test(imageUrl);
}

export function UserImageUrlNotValidError(imageUrl: string): Error {
  return new Error(`Image URL ${imageUrl} is not valid`);
}
