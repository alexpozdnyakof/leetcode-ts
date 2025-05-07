export function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let r = 0;
  let n = x;
  let m;

  while (n !== 0) {
    m = n % 10;
    n = (n / 10) << 0;
    r = r * 10;
    r += m;
  }
  return r === x;
}
