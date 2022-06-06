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
    // selects all of the square divs
    const _squares = document.querySelectorAll(".square");
    const _resetBtn = document.getElementById('reset-btn');
        // 0 1 2
        // 3 4 5
        // 6 7 8

    const _selectionArray = new Array(9);

    // useless
    // _privateMethod = () => {
    //     console.log("Sir");
    // }

    _addEventListeners = () => {
        // Adds input to gameboard and _selectionArray
        _squares.forEach((square, index) => {
            square.addEventListener("click", () => {
                if(_checkSquareEmpty(square)) {
                    _inputToSelectionArray(index);
                    _drawInput(square);
                }
            })
        });
        // Reset gameboard and _selectionArray on click
        _resetBtn.addEventListener('click', () => {
            gameboard.reset();

        })
    }

    _drawInput = (square) => {
        square.innerHTML = "X";
        console.log('input');
    }

    _inputToSelectionArray = (index) => {
        _selectionArray[index] = "X";
    }
    
    _checkSquareEmpty = (square) => {
        if(square.innerHTML === "")
            return true;
    }

    _clearSelectionArray = () => {
        _selectionArray.splice(0, _selectionArray.length);
    }
    _addEventListeners()

        
    return {
        // fills all of the squares on the board
        testFillSquares: () => {
            _squares.forEach((value, i) => {
                _squares[i].innerHTML = "X"
        })
    },
    reset: () => {
        _squares.forEach((square) => {
            square.innerHTML = "";
        _clearSelectionArray();
        })
    },
    // 
        // publicMethod: _privateMethod
            
    };
})();

    // gameboard.publicMethod();




const displayController= (() => {

    function _privateMethod() {
        console.log(_score);
    }
        
    return {
        greeting: () => {
            console.log('Hello World');
        }
    };
})();

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
