import { test, expect } from 'vitest';
import { longestPalindrome } from './05-longest-palindromic-substring';

test('should return bab', () => {
  expect(longestPalindrome('babad')).toBe('bab');
});

test('should return bb', () => {
  expect(longestPalindrome('cbbd')).toBe('bb');
});

test('should return c', () => {
  expect(longestPalindrome('c')).toBe('c');
});
