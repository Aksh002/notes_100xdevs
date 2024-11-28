"use strict";
function sum(user1, user2) {
    return user1.age + user2.age;
}
const age = sum({
    name: 'Akshit',
    age: 20
}, {
    name: 'Jane',
    age: 19
});
console.log(age);
