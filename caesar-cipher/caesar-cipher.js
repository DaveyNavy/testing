export function caesarCipher(str, shift) {
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];
    const code = currChar.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      cipher += String.fromCharCode(65 + ((code - 65 + shift) % 26));
    } else if (code >= 97 && code <= 122) {
      cipher += String.fromCharCode(97 + ((code - 97 + shift) % 26));
    } else {
      cipher += currChar;
    }
  }
  return cipher;
}
