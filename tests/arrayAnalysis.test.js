import arrayAnalysis from "../code/arrayAnalysis";

test('Array analysis test 1', () => {
  const expected = {
      average: 2775.25,
      min: 1,
      max: 10000,
      length: 4
  };
  const data = [1,100,1000,10000];
  expect(arrayAnalysis(data)).toEqual(expected);
});

test('Array analysis test 2', () => {
  const expected = {
      average: 2,
      min: 0,
      max: 4,
      length: 5
  };
  const data = [0,1,2,3,4];
  expect(arrayAnalysis(data)).toEqual(expected);
});