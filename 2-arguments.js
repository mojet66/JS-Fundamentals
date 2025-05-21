const args = process.argv.slice(2);
const count = args.length;
console.log(count);

if (count == 0) {
  console.log("No argument");
} else if (count == 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

// // const args = process.argv.slice(2);
// console.log(args[0]);
// console.log(args[1]);
// console.log(args[2]);
