const encode = (bin) => {
  let res = 0n;
  let n = 1n;
  for (let i = bin.length - 1; i >= 0; i--) {
    res += n * BigInt(bin[i]);
    n *= 256n;
  }
  return res.toString();
};

const decode = (s) => {
  let n = BigInt(s);
  /*
  if (n == 0n) {
    return new Uint8Array([0]);
  }
  */
  const b = [];
  for (;;) {
    const m = n % 256n;
    b.unshift(Number(m));
    n /= 256n;
    if (n == 0n) break;
  }
  return new Uint8Array(b);
}

export const Base10 = { encode, decode };
