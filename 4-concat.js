const args1 = process.argv[2];
const args2 = process.argv[3];
if (args1 && args2) {
  console.log(`${args1} is ${args2}`);
} else if (args1 && !args2) {
  console.log(`${args1} is ${args2}`);
} else {
  console.log(`${args1} is ${args1}`);
}
