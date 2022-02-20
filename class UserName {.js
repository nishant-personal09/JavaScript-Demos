class Animal {
    constructor(name) {
        this.name=name;
    }
    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}
let d = new Dog (
    "nishant"
)
d.speak();
// class UserName {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;

//     }

//     speak() {
//         console.log(`${this.firstname} is making an announcement`)
//     }
// }
// let Name = new UserName();
// Name.firstname= "Ramesh";
// console.log(

