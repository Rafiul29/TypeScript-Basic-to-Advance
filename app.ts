// JavaScript and TypeScript......
// Numbers, Strings & Booleans
function add (n1: number,n2: number,showResult: boolean, resultParse: string): number{
    // if( typeof n1 !== 'number' || typeof n2  !== 'number'){
    //     throw new Error("Incorrect Input");
    // }
    const result = n1+n2;
    if(showResult){
        console.log( resultParse +result);
    }else{
        return  result;
    }
}

let number1= 4;
let number2 = 5;
let printResult = true;
let resultParse = 'Result is ';

 add(number1,number2, printResult,resultParse)
