import reverse from "../code/reverseString";

test("Reverse string test 1", () => {
  expect(reverseString("idk")).toBe("kdi");
});

test("Reverse string test 2", () => {
  expect(reverseString("Hi There")).toBe("erehT iH");
});

test("Reverse string test 3", () => {
  expect(reverseString("Welcome to the future")).toBe("erutuf eht ot emocleW");
});

test("Reverse string test 4", () => {
  expect(reverseString("Today I'm going to be productive :)")).toBe(
    "): evitcudorp eb ot gniog m'I yadoT"
  );
});