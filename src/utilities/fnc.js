/* eslint-disable no-useless-escape */
export const isExpired = (exp) => {
  if (!exp) return false
  return exp < Date.now() + 1 / 1000
}

export const toSlug = (str) => {
  // Convert to lower case
  str = str.toLowerCase()

  // delete sign
  str = str
    .normalize('NFD') // convert string to unicode
    .replace(/[\u0300-\u036f]/g, '') // delete sign

  // replace đĐ to d
  str = str.replace(/[đĐ]/g, 'd')

  //  delete special characters
  str = str.replace(/([^0-9a-z-\s])/g, '')

  // replace key space to "-"
  str = str.replace(/(\s+)/g, '-')
  str = str.replace(/-+/g, '-')
  str = str.replace(/^-+|-+$/g, '')

  // return
  return str
}
export function checkIsMail(mail) {
  const isMatch = mail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  return !!isMatch
}
