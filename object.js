const userService = {
    users:[],

    addUser(name){
        this.users.push(name)
    },
    getUser(){
        return this.users;
    }
    
}
userService.addUser("Abhinav")
console.log(userService.getUser());

const obj = {
    name:"Abhinav",
    age:24,
    role:"SDE",
    pNo:"**********"

}
console.log(Object.assign({obj},{Name:"Rahul",age:25,role:"SDE"}));
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.freeze(obj),"Freeze successfull");
console.log(Object.seal(obj));
console.log(Object.hasOwn(obj,"age"));
console.log(Object.hasOwnProperty("name"));

const parent = {
  greet() {
    console.log("Hello from parent");
  }
};

const child = Object.create(parent);

child.greet();








