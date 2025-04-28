export function twoSum(nums: number[], target: number): number[] | undefined {
  const buffer = new Map<number, number>();
  for (let i = 0; i <= nums.length; i++) {
    const diff = target - nums[i];
    if (buffer.has(diff)) return [buffer.get(diff) as number, i];
    buffer.set(nums[i], i);
  }
}
