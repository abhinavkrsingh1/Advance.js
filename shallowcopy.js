// const user = {
//     name:"Abhinav",
//     age:23
// }

// const user2 = user;
// user2.maeks=86;

// user2.name="Akash Yadav"
// console.log(user);
// console.log(user2);

//shallow copy

const user3 = {
    name:"Abhinav",
    age:34
}

const user4 = {...user3}
 user4.marks=59
 console.log(user3);
 console.log(user4);