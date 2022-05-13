function Fibonacci(n) {
    let evvelki = 0;
    let indiki = 1;

    if (n<=1) { return 1}
        while (n>1) {
            indiki = indiki+ evvelki;
            evvelki = indiki - evvelki;
            n=-1
        }
        return indiki;

}

console.log(Fibonacci(4))


// const fibonacci = (n) => {
//     let current = 1;
//     let previous = 0;

//     if(n <= 1) return 1

//     while(n>1){
//         current += previous
//         previous = current - previous
//         n-=1
//     }
//     return current
// }

// console.log('FIBONACCI AT 1 = ', fibonacci(1))
// console.log('\nFIBONACCI AT 5 = ', fibonacci(5))
// console.log('\nFIBONACCI AT 10 = ', fibonacci(10))
