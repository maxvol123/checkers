let NowPosition1 = [1,3]
let NowPosition2 = [1,3]
let NowPosition3 = [1,3]
let NowPosition4 = [1,3]
let NowPosition5 = [1,3]
let NowPosition6 = [1,3]
let NowPosition7 = [1,3]
let NowPosition8 = [1,3]
let NowPosition9 = [1,3]
let NowPosition10 = [1,3]
let NowPosition11 = [1,3]
let NowPosition12 = [1,3]
let SizeField = [8,8]
function right(number) {
    if (number[0]<SizeField[0]&&number[1]<SizeField[0]) {
        return number = [number[0]+1,number[1]+1]
    }else{
        console.log("You cant go here");
    }
    console.log(number);
}
function left() {
    if (number[0]>1&&number[1]<SizeField[0]) {
        number = [number[0]-1,number[1]+1]
    }else{
        console.log("You cant go here");
    }
    console.log(number);
}