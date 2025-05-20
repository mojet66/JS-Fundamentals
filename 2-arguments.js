const args = process.argv;
// console.log(args);
let realArgs = args.slice(2);
// console.log(realArgs);
// console.log(realArgs.length);
const count = realArgs.length;
console.log(count);

if (count == 0) {
  console.log("No argument");
} else if (count == 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
