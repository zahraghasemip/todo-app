function Numbers(num1: number, num2: number) {
  return num1 + num2;
}
function numberResult(num: number): void {
  console.log("number is" + num);
  return;
}
numberResult(Numbers(10, 12));

//function as type
let combinedFunctions1: (x: number, y: number) => number;
combinedFunctions1 = Numbers;
let combinedFunctions2: (a: number) => void;
combinedFunctions2 = numberResult;
combinedFunctions2(combinedFunctions1(3, 8));
