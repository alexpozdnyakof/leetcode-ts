export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = new Array();
    let i = 0; 
    let px = 0; 
    let py = 0;
    while(i <= nums1.length + nums2.length) {
        i++;
        if(nums1[px] > nums2[py] || px >= nums1.length && py < nums2.length) {
            merged.push(nums2[py]);
            py++;
        } 
        if(nums1[px] === nums2[py] && px < nums1.length && py < nums2.length) {
            merged.push(nums1[px]);
            merged.push(nums2[py]);
            px++;
            py++;
        }
        if(nums1[px] < nums2[py] || py >= nums2.length && px < nums1.length) {
            merged.push(nums1[px]);
            px++;
        } 
    }
    
    if(merged.length % 2 > 0) return merged[Math.floor(merged.length / 2)]

    const middle = merged.length / 2;
    return (merged[middle] + merged[middle-1]) / 2
};  

