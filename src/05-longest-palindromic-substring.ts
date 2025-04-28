export function longestPalindrome(s: string): string {
  let result = '';
  let maxResult = '';
  let i = 0;
  let start = 0;
  while (i < s.length) {
    result += s[i];
    if (result.length < maxResult.length) {
      i++;
      continue;
    }
    if (isPalindrome(result)) {
      maxResult = maxResult.length >= result.length ? maxResult : result;
    }
    if (i === s.length - 1) {
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
  while (i >= 0) {
    if (s.at(i) !== s.at(-i - 1)) return false;
    i--;
  }
  return true;
}
