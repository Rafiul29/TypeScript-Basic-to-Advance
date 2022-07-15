// JavaScript and TypeScript......
// Numbers, Strings & Booleans
function add(n1, n2, showResult, resultParse) {
    // if( typeof n1 !== 'number' || typeof n2  !== 'number'){
    //     throw new Error("Incorrect Input");
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(resultParse + result);
    }
    else {
        return result;
    }
}
var number1 = 4;
var number2 = 5;
var printResult = true;
var resultParse = 'Result is ';
add(number1, number2, printResult, resultParse);
