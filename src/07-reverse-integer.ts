export function reverse(n: number): number {
  const min = -(2 ** 31);
  const max = min * -1 - 1;
  let r = 0;
  let m;

  while (n !== 0) {
    m = n % 10;
    n = (n / 10) << 0;
    r = r * 10;
    r += m;
  }
  return r < min || r > max ? 0 : r;
}
