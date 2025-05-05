export function convert(s: string, numRows: number): string {
  if (numRows < 2) return s;
  const result = new Array(numRows).fill('');
  let i = 0;
  let step = -1;
  let r = 0;

  while (i < s.length) {
    if (r === 0 || r === numRows - 1) step = -step;
    result[r] += s[i];
    i++;
    r += step;
  }

  return result.join('');
}
