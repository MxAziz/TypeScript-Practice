// conditional types
type a1 = number;
type a2 = undefined;

type x = a1 extends null ? true : false;

type y = a2 extends null ? true : a2 extends undefined ? undefined : any;



type Sheikh = {
    car: string;
    bike: string;
    ship: string;
}
type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
type hasTruck = CheckVehicle<"truck">;