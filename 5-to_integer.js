const args = process.argv[2];
if (!isNaN(args)) {
  console.log(`My number: ${args}`);
} else if (args === undefined) {
  console.log("Not a number");
} else {
  console.log("Not a number");
}
