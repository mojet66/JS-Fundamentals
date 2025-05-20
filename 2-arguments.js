const args = process.argv;
const realArgs = args.slice(4);
const count = realArgs.lenth;
if (count === 0) {
  console.log("No argument");
} else if (count === 0) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
