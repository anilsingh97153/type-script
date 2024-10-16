"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Anil",
    email: "anil@co.dev",
    isActive: true
};
// function taking object as input
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "anil", isPaid: true });
// function returning object
function createCourse(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return { name: "anil", isPaid: true };
}
// odd behaviour of objects --> in below if I pass a object with an extra field which is not defined in function parameter, it shows an error, but as soon as I put the same in a new object, and now pass that object, error is gone.
createCourse({ name: "anil", isPaid: true, email: "anil@co.dev" });
var newUser = {
    name: "Anil",
    isPaid: false,
    email: "anil@co.dev"
};
createCourse(newUser);
