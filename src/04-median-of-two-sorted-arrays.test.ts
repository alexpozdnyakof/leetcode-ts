import { findMedianSortedArrays } from "./04-median-of-two-sorted-arrays";
import { test, expect } from "vitest";

test("should return 2.0", () => {
    const nums1 = [1,3];
    const nums2 = [2]
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2)
})

test("should return 2.5", () => {
    const nums1 = [1,2];
    const nums2 = [3,4]
    expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5)
})

