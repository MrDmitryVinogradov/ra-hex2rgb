export default function checkValidity(value) {
  for (let i = 1; i < 7; i++) {
    if (value[i].toString(16) < 0 || value[i].toString(16) > 'e'.toString(16)) {
      return true
    }
  }
  if (value[0] !== '#') {
    return true
  }
  return false
}