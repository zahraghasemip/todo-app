let person: {
  name: string;
  age: number;
  isMale: boolean;
  hobbies: string[];
  role: [string, number];
} = {
  name: "shabnam",
  age: 24,
  isMale: false,
  hobbies: ["music"],
  role: ["shabi", 23],
};

person.role.push("shahin");
console.log(person.role);
