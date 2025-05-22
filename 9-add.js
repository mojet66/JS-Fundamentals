const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

// if ((a, b)) {
//   console.log(sum);
// } else {
//   console.log(NaN);
// }
function add(a, b) {
  const sum = a + b;
  return sum;
}
console.log(add(a, b));
