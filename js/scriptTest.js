const a = {};
const b = {key: 'b'};
const c = {key: 'c'};
a[b] = 1;
a[c] = 2;
console.log(a[c]);
console.log(b);
console.log(c);