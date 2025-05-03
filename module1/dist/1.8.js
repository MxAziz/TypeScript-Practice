"use strict";
const myFriends = ["Alice", "Bob", "Charlie", "David", "Eve"];
const [, , secondFriend, ...rest] = myFriends;
console.log(secondFriend, rest);
