export function myAtoi(s: string): number {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  let result = 0;
  let sign = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) {
      if (result === 0 && sign === 0) sign = 1;
      if (s[i] === '0' && result === 0) continue;
      result = result * 10 + +s[i];
    } else if (
      (s[i] !== '-' && s[i] !== ' ' && s[i] !== '+') ||
      (s.charCodeAt(i - 1) > 47 && s.charCodeAt(i - 1) < 58) ||
      s[i - 1] === '-' ||
      s[i - 1] === '+'
    ) {
      break;
    } else {
      if (s[i] === '-' || s[i] === '+') {
        if (sign !== 0) {
          break;
        }
        sign = s[i] === '-' ? -1 : 1;
      }
    }
  }
  result = result === 0 ? result : result * sign;
  return result > max ? max : result < min ? min : result;
}
