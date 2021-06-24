import caesarCipher from "../code/caesarCipher";

test('abcdefgh to bcdefghi', () => {
  expect(caesarCipher('abcdefgh', 1)).toBe('bcdefghi')
})

test('Sebastian to Colkcdskx', () => {
  expect(caesarCipher('Sebastian', 10)).toBe('Colkcdskx')
})

test('Third.test to Drsbn.docd', () => {
  expect(caesarCipher('Third.test', 10)).toBe('Drsbn.docd')
})