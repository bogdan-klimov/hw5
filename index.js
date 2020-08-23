//////////////////////////////////////1
const myObj = {
    method1: function () {

    },
    method2: function () {
        
    },
    method3: function () {
        console.log("метод3");
    }
}

// myObj.method3();

/////////////////////////////////////2
const myDogs = {
    name: "Petya",
    age: 15,
    sex: "sexy",
    isBark: "bark",
    legs: 2,
    greeting: function () {
        console.log(`Hello! My name is ${this.name}, I'm a ${this.sex}, I'm ${this.age}, and I have a ${this.legs} legs`,);
    } 
}

// myDogs.greeting()

////////////////////////////////////3

myObj["method4"] = function () {
        
};
myObj["method5"] = function () {
        
};

for (let key in myObj) {
    // console.log(myObj[key]);
}

myDogs["I live"] = "Cherkassy";

myDogs["I like"] = "Football";

for (let key in myDogs) {
    // console.log(myDogs[key]);
}



