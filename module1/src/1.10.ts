type FrontendDeveloper = {
    skills: string[];
    designation: "Frontend Developer";
};

type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
};

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
    skills: ["JavaScript", "TypeScript", "Node.js"],
    designation: "Frontend Developer",
    designation2: "Backend Developer",
};

console.log(fullStackDeveloper.designation);