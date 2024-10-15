function addTwo(num: number): number {
    return num + 2
}


function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(6)
getUpper("happy")
signUpUser("anil", "anil@123. dev", false,)
loginUser("anil", "anil@123.dev")

// One of the case of returning multiple types of value -- will see it later.
// function getValue(myVal: number): boolean {
//     if(myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s: string): string => {
    return ""
}


// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})


// function returing void, and takes string value
function consoleError(errmsg: string): void{
    console.log(errmsg);
    throw new Error(errmsg)

}

// function returning nothing at all, not even the occuring errors from throw which is possible in case of 'void'/basically doing forceful termination of the program. 

// `never` stops execution after the function is called; `void` allows normal flow after handling errors.

function handleError(errmsg: string): never{
    console.log(errmsg);
    throw new Error(errmsg)
}






export {}  