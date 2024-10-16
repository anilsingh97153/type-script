const User = {
    name: "Anil",
    email: "anil@co.dev",
    isActive: true
}

// function taking object as input
function createUser({name: string, isPaid: boolean}) {}


createUser({name: "anil", isPaid: true});


// function returning object
function createCourse({name: string, isPaid: boolean}): {name: string, isPaid: boolean}{
    return {name: "anil", isPaid: true}
}

// odd behaviour of objects --> in below if I pass a object with an extra field which is not defined in function parameter, it shows an error, but as soon as I put the same in a new object, and now pass that object, error is gone.

createCourse({name: "anil", isPaid: true, email:"anil@co.dev"})

const newUser = {
    name: "Anil",
    isPaid: false, 
    email: "anil@co.dev"
}

createCourse(newUser);

// Object literals have strict excess property checks, while variables only require type compatibility (extra fields allowed).



// type alias --> kinda type we are making, means 'User' type
type User = {
    name: string,
    email: string,
    isActive: boolean
}


function createsUser(user: User): User {
    return {name: "", email: "", isActive: true}
}

createsUser({name: "", email: "", isActive: true})

export {}