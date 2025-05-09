import { test, expect } from 'vitest';
import { twoSum } from './01-two-sum';

test('it should return [0,1] for [2, 7, 11, 15]', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;

  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('it should return [1,2]', () => {
  const nums = [3, 2, 4];
  const target = 6;

  expect(twoSum(nums, target)).toEqual([1, 2]);
});

test('it should return [0,1] for [3,3]', () => {
  const nums = [3, 3];
  const target = 6;

  expect(twoSum(nums, target)).toEqual([0, 1]);
});
