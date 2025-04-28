import { expect, test } from 'vitest';
import { lengthOfLongestSubstring } from './03-longest-substring-without-repeating-characters';

test('should return 3 for abcabcbb', () => {
  const s = 'abcabcbb';

  expect(lengthOfLongestSubstring(s)).toBe(3);
});

test('should return 1 for bbbbb', () => {
  const s = 'bbbbb';

  expect(lengthOfLongestSubstring(s)).toBe(1);
});

test('should return 3 for pwwkew', () => {
  const s = 'pwwkew';

  expect(lengthOfLongestSubstring(s)).toBe(3);
});

test('should return 1 for " "', () => {
  const s = ' ';

  expect(lengthOfLongestSubstring(s)).toBe(1);
});

test('should return 2 for au', () => {
  const s = 'au';

  expect(lengthOfLongestSubstring(s)).toBe(2);
});
