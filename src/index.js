module.exports = function reverse (n) {
  let num = String(Math.abs(n));
  let result = '';
  for (let i = num.length - 1; i >= 0; i--) {
    result += num[i];
  }
  return Number(result);
}