export function twoSum(nums: number[], target: number): number[] {
    const buffer = new Map<number, number>();
    for(let i = 0; i <= nums.length; i++) {
        const diff = target - nums.at(i);
        if(buffer.has(diff)) return [buffer.get(diff), i];
        buffer.set(nums.at(i), i);
    }
};
