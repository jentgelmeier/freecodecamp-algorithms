function telephoneCheck(str) {
  const filter = str.match(/[0-9]/g).join('')
  if (str.endsWith(')') || str.startsWith('-') || str.startsWith('(') && !str.match(/[)]/)) {
    return false
  } else if (str.match(/[1][ ]*[0-9][0-9][0-9][ |-]*[0-9][0-9][0-9][ |-]*[0-9][0-9][0-9][0-9]/) && filter.length == 11) {
    return true;
  } else if (str.match(/[(][0-9][0-9][0-9][)][ ]*[0-9][0-9][0-9][ |-]*[0-9][0-9][0-9][0-9]/) && filter.length == 10) {
    return true;
  } else if (str.match(/[0-9][0-9][0-9][ |-]*[0-9][0-9][0-9][ |-]*[0-9][0-9][0-9][0-9]/) && filter.length == 10) {
    return true;
  } else if (str.match(/[1][ ]*[()][0-9][0-9][0-9][)][ |-]*[0-9][0-9][0-9][ |-]*[0-9][0-9][0-9][0-9]/) && filter.length == 11) {
    return true;
  }
  return false
  }
console.log(telephoneCheck("(555) 555-5555"));

// single )( or () around whole or ? or more than two dashes