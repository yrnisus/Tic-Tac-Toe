/* Rule of thumb: if you only ever need ONE of something 
(gameBoard, displayController), use a module. If you need multiples of something (players!), 
create them with factories. */

// MODULE

// const calculator = (() => {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return {
//       add,
//       sub,
//       mul,
//       div,
//     };
//   })();


const gameboard = (() => {
    const score = 0;
    return {
        greeting: function() {
            console.log('Hello World');
            
        }
    };
})();

gameboard.greeting();
console.log(gameboard.score);

const displayController = () => {
    

    const startGame = () => {
        const squares = document.querySelectorAll(".square");
    }

}

// Factory Function

// const FactoryFunction = string => {
//     const capitalizeString = () => string.toUpperCase();
//     const printString = () => console.log(`----${capitalizeString()}----`);
//     return { printString };
//   };
  
//   const taco = FactoryFunction('taco');
  
//   printString(); // ERROR!!
//   capitalizeString(); // ERROR!!
//   taco.capitalizeString(); // ERROR!!
//   taco.printString(); // this prints "----TACO----"
  

const player = () => {

}


// const squares = document.querySelectorAll(".square");
// squares.forEach(function() {
//     console.log("match");
// })
