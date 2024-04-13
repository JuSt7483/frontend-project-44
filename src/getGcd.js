function getGcd(a, b) {
  if (b > a) return getGcd(b, a);
  if (!b) return a;
  return getGcd(b, a % b);
}

export default getGcd;
