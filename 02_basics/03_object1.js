// singleton
// object.create

// objet liteals
const mySym = Symbol("Key2")

const JsUser = {
    name: "Dipendu",
    "full name": "Dipendu Jana",// ay khatre . (dot) diye object ke acces kora jay na tay [ ] diye asses korte hoy
    age: 21,
    [mySym]: "myKey1",
    location: "Haldia",
    email: "dipendujana@gmail.com",
    isLogeedIn: false,
    isLoginDays: ["Mon Day , Sun Day"]
}

// console.log(JsUser.isLogeedIn)
// console.log(JsUser.isLoginDays)
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "dipendu@chatgpt.com"
//  Object.freeze(JsUser)
JsUser.email = "dipendu@microsoft.com"
//  console.log(JsUser.email);



 JsUser.greeting = function(){
     console.log("Hello JS user");
 }
 JsUser.greetingTwo = function(){
     console.log(`Hello Js user,${this.name}`);
 }

 console.log(JsUser.greeting());
  console.log(JsUser.greetingTwo());

  JsUser.greetingthree = function(){
    console.log(`Js user email,${this["full name"]}`);
  }
  console.log(JsUser.greetingthree());