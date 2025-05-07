let age: number = 25;
let pie: number = 3.1416;
let isActive: boolean = true;
let AmarName: string = "Muhammad Aziz";

// null
let Nothing: null = null;
// undefined
let notDefined: undefined = undefined;

// any
let randomValue: any = 5;
randomValue = "Now its a string";
randomValue = true;

// unknown
let userInput: unknown = 'hello';
if (typeof userInput === "string") {
    // console.log(userInput.toUpperCase());
}

// void
function greet(): void{
    // console.log("hello");
}
greet();

// literal types
type Status = "success" | "error" | "loading";
let apiResponse: { message: string, status: Status } = {
    message: "data loaded",
    status: "success",
}
// console.log(apiResponse.message, apiResponse.status);


// readonly
type User = {
    readonly id: number;
    name: string;
}

const user: User = {
    id: 101,
    name : "Aziz",
}

user.name = "Ahmed";
console.log(user.name);

// array
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["banana", "apple", "orange"];

const [a, b, c] = fruits;
console.log(a, b, c);


// tuple
let userTuple: [number, string, boolean] = [1, "John", true];