let input1: unknown = 12;
let input2: any = 3;
//error unknown can put in string==>>>> let string1: string = input1;
let string2: string = input2;
//error>>can't use funcs on unknown>>> input1.method();
input2.method();
