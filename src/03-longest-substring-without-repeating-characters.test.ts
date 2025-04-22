import { expect, test } from "vitest";
import { lengthOfLongestSubstring } from "./03-longest-substring-without-repeating-characters";


test("should return 3", () => {
    const s = "abcabcbb";

    expect(lengthOfLongestSubstring(s)).toBe(3);
})

test("should return 1", () => {
    const s = "bbbbb";

    expect(lengthOfLongestSubstring(s)).toBe(1);
})

test("should return 3", () => {
    const s = "pwwkew";

    expect(lengthOfLongestSubstring(s)).toBe(3);
})

test("should return 1", () => {
    const s = " ";

    expect(lengthOfLongestSubstring(s)).toBe(1);
})


test("should return 2", () => {
    const s = "au";

    expect(lengthOfLongestSubstring(s)).toBe(2);
})
