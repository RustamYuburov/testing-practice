const caesarCipher = (str, shift) => {
  if (shift === 0) return str;

  return str.replace(/[a-z]/gi, (char) =>
    String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
  );
};

export default caesarCipher;