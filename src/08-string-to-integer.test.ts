import { expect, test } from 'vitest';
import { myAtoi } from './08-string-to-integer';

test('should return 42 for "42"', () => {
  const input = '42';
  const result = myAtoi(input);
  expect(result).toBe(42);
});

test('should return -42 for "-042"', () => {
  const input = '-042';
  const result = myAtoi(input);
  expect(result).toBe(-42);
});

test('should return 1337 for "1337c0d3"', () => {
  const input = '1337c0d3';
  const result = myAtoi(input);
  expect(result).toBe(1337);
});

test('should return 0 for "0-1"', () => {
  const input = '0-1';
  const result = myAtoi(input);
  expect(result).toBe(0);
});

test('should return 0 for "words and 987"', () => {
  const input = 'words and 987';
  const result = myAtoi(input);
  expect(result).toBe(0);
});

test('should floor overflowed value', () => {
  const max32Integer = 2 ** 31 - 1;
  const input = (max32Integer + 1).toString();
  const result = myAtoi(input);
  expect(result).toBe(max32Integer);
});

test('should round underflowed value', () => {
  const min32Integer = -(2 ** 31);
  const input = (min32Integer + -1).toString();
  const result = myAtoi(input);
  expect(result).toBe(min32Integer);
});

test('should return 1 for "+1"', () => {
  const input = '+1';
  const result = myAtoi(input);
  expect(result).toBe(1);
});

test('should return 0 for "+-12"', () => {
  const input = '+-12';
  const result = myAtoi(input);
  expect(result).toBe(0);
});

test('should return 0 for "  +  413"', () => {
  const input = '  +  413';
  const result = myAtoi(input);
  expect(result).toBe(0);
});
