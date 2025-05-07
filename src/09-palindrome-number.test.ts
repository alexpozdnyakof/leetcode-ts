import { test, expect } from 'vitest';
import { isPalindrome } from './09-palindrome-number';

test('should return true for 121', () => {
  const input = 121;
  const result = isPalindrome(input);
  expect(result).toBeTruthy();
});

test('should return true for -121', () => {
  const input = -121;
  const result = isPalindrome(input);
  expect(result).toBeFalsy();
});

test('should return false for 10', () => {
  const input = 10;
  const result = isPalindrome(input);
  expect(result).toBeFalsy();
});
