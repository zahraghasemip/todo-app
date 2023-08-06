type InputType = number | string;
type ResType = "as-number" | "as-string";
function combine(input1: InputType, input2: InputType, resulttype: ResType) {
  let result;
  if (typeof input1 == "number" && typeof input2 == "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resulttype === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combineNumbers = combine("3", "2", "as-string");
const combineNumbers2 = combine("2", "2", "as-number");

const combineStrings = combine("shabi", "gh", "as-string");
console.log(combineNumbers, combineStrings, combineNumbers2);
