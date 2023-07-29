enum Role {
  admin,
  teacher,
  author,
}
let person = {
  name: "shabnam",
  age: 24,
  isMale: false,
  hobbies: ["music"],
  role: Role.admin,
};

if (person.role === Role.admin) {
  console.log("let user login");
}
