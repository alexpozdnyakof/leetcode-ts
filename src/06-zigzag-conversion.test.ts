import { test, expect } from 'vitest';
import { convert } from './06-zigzag-conversion';

test('should return PAHNAPLSIIGYIR for PAYPALISHIRING and 3 rows', () => {
  const s = 'PAYPALISHIRING';
  const numRows = 3;
  expect(convert(s, numRows)).toBe('PAHNAPLSIIGYIR');
});

test('should return PINALSIGYAHRPI for PAYPALISHIRING and 4 rows', () => {
  const s = 'PAYPALISHIRING';
  const numRows = 4;
  expect(convert(s, numRows)).toBe('PINALSIGYAHRPI');
});

test('should return A for A and 1 rows', () => {
  const s = 'A';
  const numRows = 1;
  expect(convert(s, numRows)).toBe('A');
});
