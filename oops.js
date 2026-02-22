class User{
    constructor(name,age){
        this.name=name;
        this.age=age

    }
    getuser(){
       return console.log(this.name);
    }
}

const user1 = new User("Abhinav",23);
console.log(user1);
user1.getuser();

// learning inheritance

class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name}  Make a sound `);
    }
}

class Dog extends   Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed;
    }
    speak() {
        console.log(`${this.name}  barks`);
    }

}
const mydog = new Dog("Buddy","Golden Retriver")
console.log(mydog);
mydog.speak()