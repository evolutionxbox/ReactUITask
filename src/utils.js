export const classNames = (classes) => {
  if (typeof classes === 'string') {
    return classes
  } else {
    return classes.flatten().join(' ')
  }
}
