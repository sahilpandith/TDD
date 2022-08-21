const {getName,repeatString,reverseString, removeFromArray,sumAll,isLeapYear,ftoc,ctof} = require('./index.js')

describe('test a function which returns name', () => {
    test('verify name', () => {
        expect(getName()).toEqual('Sahil')
    })

    test('test a function which takes a string and a int as argunents and returns the str concatinated as many time as gthe integer agrument', () => {
        expect(repeatString('hi',4)).toEqual('hihihihi')
    })

    test('test function which returns reverse of the string passed as input', () => {
        expect(reverseString('hello')).toEqual('olleh')
    })

    test('test an function which removes item from an array provied and array and item to be removed as arrguments',()=> {
        const arr = ['sahil','ramnik','ankit']
        expect(removeFromArray(arr,'ramnik')).toEqual(['sahil','ankit'])
    })

    test('test sumAll function', () => {
        expect(sumAll(1,4)).toEqual(10)
    })
    test('test if a year is leap year or not', ()=> {
        expect(isLeapYear(2000)).toEqual(true)
        expect(isLeapYear(1985)).toEqual(false)
    })

    test('test a function which converts temperation to celcius provided temp in farenhiet',()=>{
        expect(ftoc(32)).toEqual(0)
        expect(ftoc(100)).toEqual(37.8)
    })
    test('test a function which converts temperation to farenhiet provided temp in celcius',()=>{
        expect(ctof(0)).toEqual(32)
    })
})
