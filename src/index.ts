function may(arg1: string, arg2: string){
    return arg1 + ' ' + arg2;
}

interface MyFirstInterface {
    howIDoIt: string,
    simeArray: (string | number)[],
    withData: object[],
}

const myHometask: MyFirstInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};



interface MyArray<T> {
    [N: number]: T;
    reduce<U>(fn: (el: T) => U) : U[];
    }

const brrr: Array<number> = [1, 2, 3, 4];
const prr = brrr.reduce((i, k) => i + k);

console.log(prr);