function f(num1: number, num2: number, isRes: boolean, text: string) {
  const res = num1 + num2;
  if (isRes) {
    console.log(text + res);
  } else {
    return res;
  }
}
let num1: number;
num1 = 5;
const text1 = "result is : ";
const showRes = true;
f(12, 5, showRes, text1);
