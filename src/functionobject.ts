//clean code (withouot spelling mistakes and with proper formatting) and with comments
// Types of functions

const double = (n: number): number => {
    return n * 2;
};

double(5); // 10


function logMessage(message: string, type: string): boolean {
    if (type === "1") {
        console.log("one");
    } else {
        console.log(1);
    }
    return true;
}


function throwError(message: string): never {
    throw new Error(message);
} // declared never, otherwise it would be void

const throwError1 = (message: string): never => {
    throw new Error(message);
}; // inferred as never by default

const forever = (): never => {
    while (true) {
        console.log("forever");
    }
}; // never here by default


function greet(name: string, title?: string): string {
    if (title) {
        return `Hello ${title} ${name}`;
    } else {
        return `Hello ${name}`;
    }
} // here title is an optional parameter


// function greet(name: string, title?: string = "MR") {
// ❌ Not allowed: cannot combine optional and default like this
// }


function greetWithDefault(name: string, title: string = "MR"): string {
    if (title) {
        return `Hello ${title} ${name}`;
    } else {
        return `Hello ${name}`;
    }
} // here title is a default parameter


// Objects
// Defining entities, models, shapes like user, state, etc.

interface Bio {
    name: string;
    age: number;
    email: string;
}

interface User {
    username: string;
    email: string;
    age: number;
    bio: Bio | string; // can be Bio object or string
}


// Type vs Interface (type uses '=')

// Union of types
type Status = "success" | "error" | "pending";

type UserWithStatus = User & { status: Status };

type UserWithAddress = User & {
    address: string;
};


// Function call
//logMessage("message", "1");









// //{
//     //raw file
    
// //type of fucntuion

// const doble = (n:number):number => {
//     return n*2
// }   
// doble(5) //10


// function logmessage(message:string, type:string){
//     if( type === "1"){
//         console.log("one");
//         //return 1;
//     }
//     else{
//         console.log(1);
//         return true;
//     }
//         return true;

// }

// function throwerror( message:string):never{
//     throw new Error(message);
// }//declared never else here it will be void

// const throweror1 = (message:string)=>{
//     throw new Error(message);
// }// never here by deafult

// const forever = ()=>{
//     while(true){
//         console.log("forever");
//     }
// }// never here by default

// function greet( name:string, title?:string){
//     if(title){
//         return `Hello ${title} ${name}`; 
//     }
//     else{
//         return `Hello ${name}`;
//     }
// }// here title is optional parameter


// // function greet( name:string, title?:string+"MR"){ no bevause you haev only oe notipnal or deafault parameter
// //     if(title){
// //         return `Hello ${title} ${name}`; 
// //     }
// //     else{
// //         return `Hello ${name}`;
// //     }
// // }// here title is optional parameter


// function greeet( name:string, title:string="MR"){
//     if(title){
//         return `Hello ${title} ${name}`; 
//     }
//     else{
//         return `Hello ${name}`;
//     }
// }// here title is default parameter



// //objects
// //defuining entities , models, shapes etc like user state etc
// interface Bio{
//     name: string,
//     age: number,
//     email: string
// }

// interface User{
//     username: string,
//     email: string,
//     age: number,
//     bio: Bio|string // optional property
// }


// //type over interface ifrtst is =  in type
// // union of types
// type status = "success" | "error" | "pending";
// type userwithstatus = User& { status: status };
// type userwithaddress = User & { 
//     address: string 
// };

// logmessage("message", "1");
// //}
