function getName(){
    return 'Sahil'
}

function repeatString(str,repeatTimes){
    return Array.from({length: repeatTimes},(_,i) => str).join('')
}

function reverseString(str){
    let reverseStr="";
    for(let i=str.length-1;i>=0;i--){
        reverseStr+=str[i];
    }
    return reverseStr;
}

function removeFromArray(arr, itemToBeremoved){
//   const index = arr.indexOf(itemToBeremoved)
//   arr.splice(index,1)
//   return arr

return arr.filter(item => item!==itemToBeremoved)
}

function sumAll(start,end){
    let sum =0
    for(let i =start; i<=end;i++){
        sum+=i
    }
    return sum
}

function isLeapYear(year){
    if( year % 4 ===0 && (year % 100 !==0 || year %400 ===0)){
        return true
    }
    return false
}

function ftoc(f){
    const c = (f-32)* (5/9)
    return parseFloat(c.toFixed(1))
}
function ctof(c){
    const f =  (c * (9/5)) + 32
    return parseFloat(f.toFixed(1))
}
module.exports = {
    getName,
    repeatString,
    reverseString,
    removeFromArray,
    sumAll,
    isLeapYear,
    ftoc,
    ctof
}