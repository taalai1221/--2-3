let user = {
name: "Амир",
age: 18,
city: "Бишкек"
};
console.log(user.name, user.age, user.city);

user.age = 19;

user.phone = "+996700123456";

delete user.city;

console.log("email" in user);

for (let key in user) {
console.log(key);
}

for (let key in user) {
console.log(user[key]);
}

let propCount = 0;
for (let key in user) {
propCount++;
}
console.log(propCount);