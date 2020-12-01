var myArgs = process.argv.slice(2)
let newArr = myArgs.sort((a, b) => a-b)
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] >=0 && isNaN(newArr[i]) === false) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (newArr[i]) * 1000);
  }
};