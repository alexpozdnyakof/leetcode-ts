export function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  let result = '';
  let maxResult = '';
  let i = 0;
  let start = 0;
  while (i < s.length) {
    result = result.concat(s[i]);
    if (
      result.length > 1 &&
      result.at(0) === result.at(-1) &&
      isPalindrome(result)
    ) {
      maxResult = maxResult.length >= result.length ? maxResult : result;
      result = '';
      i = start++;
    } else if (i === s.length - 1) {
      result = '';
      i = start++;
    } else {
      i++;
    }
  }
  return maxResult;
}

function isPalindrome(s: string): boolean {
  let i = (s.length / 2) << 0;
  while (i !== 0) {
    if (s.at(i) !== s.at(-i - 1)) return false;
    i--;
  }
  return true;
}
