import calculator from '../code/calculator'

test('Calulator test 1', () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test('Calulator test 2', () => {
  expect(calculator.sub(2, 2)).toEqual(0);
});

test('Calulator test 3', () => {
  expect(calculator.mul(3, 5)).toEqual(15);
})

test('Calulator test 4', () => {
  expect(calculator.div(10, 5)).toEqual(2)
})
