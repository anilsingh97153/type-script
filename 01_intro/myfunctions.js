"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(6);
getUpper("happy");
signUpUser("anil", "anil@123. dev", false);
loginUser("anil", "anil@123.dev");
// One of the case of returning multiple types of value -- will see it later.
// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
// const heros = ["thor", "spiderman", "ironman"]
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// function returing void, and takes string value
function consoleError(errmsg) {
    console.log(errmsg);
    throw new Error(errmsg);
}
// function returning nothing at all, not even the occuring errors from throw which is possible in case of 'void'/basically doing forceful termination of the program. 
// `never` stops execution after the function is called; `void` allows normal flow after handling errors.
function handleError(errmsg) {
    console.log(errmsg);
    throw new Error(errmsg);
}
