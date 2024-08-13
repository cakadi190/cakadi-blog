export const getGravatar = (email: string): string => {
  return `https://www.gravatar.com/avatar/${generateMd5(email)}`
}