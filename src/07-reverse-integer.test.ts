import { test, expect } from 'vitest';
import { reverse } from './07-reverse-integer';

test('should return 321 for 123', () => {
  const n = 123;
  const result = reverse(n);
  expect(result).toBe(321);
});

test('should return -321 for -123', () => {
  const n = -123;
  const result = reverse(n);
  expect(result).toBe(-321);
});

test('should return 0 for 2**31', () => {
  const n = 2 ** 31;
  const result = reverse(n);
  expect(result).toBe(0);
});

test('should return 0 for -2**31+(-1) ', () => {
  const n = 2 ** 31 + -1;
  const result = reverse(n);
  expect(result).toBe(0);
});
