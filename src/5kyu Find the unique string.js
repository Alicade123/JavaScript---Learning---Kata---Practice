const findUniq = (arr) => {
  const normalize = (str) =>
    [...new Set(str.toLowerCase().replace(/\s+/g, ""))].sort().join("");

  const patterns = arr.map(normalize);

  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i];
    if (patterns.indexOf(pattern) === patterns.lastIndexOf(pattern)) {
      return arr[i];
    }
  }
};

//findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
//findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
