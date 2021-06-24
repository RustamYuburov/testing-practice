import { expect, test } from '@jest/globals';
import capitalize from '../code/capitalize';

test('Capitalize test 1', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Capitalize test 2', () => {
  expect(capitalize('how wAS your DAy?')).toBe('How wAS your DAy?');
});

test('Capitalize test 3', () => {
  expect(capitalize('mY CAR WAS SO FAST!')).toBe('MY CAR WAS SO FAST!');
});
