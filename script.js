/* Rule of thumb: if you only ever need ONE of something 
(gameBoard, displayController), use a module. If you need multiples of something (players!), 
create them with factories. */

const gameboard = (() => {
    // selects all of the square divs
    const _squares = document.querySelectorAll(".square");
    const _resetBtn = document.getElementById('reset-btn');
    let _turn = true;

    // 0 1 2
    // 3 4 5
    // 6 7 8

    const _selectionArray = new Array(9);
    // array of winning combinations
    const _winArray = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const _playerOneArray = new Array;
    const _playerTwoArray = new Array;

    _addEventListeners = () => {
        // Adds input to gameboard and _selectionArray
        _squares.forEach((square, index) => {
            square.addEventListener("click", () => {
                if (_checkSquareEmpty(square)) {
                    _inputToSelectionArray(index);
                    _inputToPlayerArray(index);
                    _drawInput(square);
                    _checkComplete();
                    _changeTurn();
                }
            })
        });
        // Reset gameboard and _selectionArray on click
        _resetBtn.addEventListener('click', () => {
            gameboard.reset();
        })
    }
    // toggles _turn
    _changeTurn = () => {
        _turn = !_turn;
    }
    // checks to see if the squares empty
    _checkSquareEmpty = (square) => {
        if (square.innerHTML === "")
            return true;
    }
    _checkComplete = () => {
        // spent hours on this ended up using the code from
        // https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn
        // boolean win var
        let win = false;
        // walks through the _winArray[]
        for (let i = 0; i < _winArray.length; i++) {
            // assigns value of _winArray[][]
            const winCombo = _winArray[i];
            let a = _squares[winCombo[0]].innerHTML;
            let b = _squares[winCombo[1]].innerHTML;
            let c = _squares[winCombo[2]].innerHTML;
            // if the squares are empty skips
            if (a === '' || b === '' || c === "") {
                continue;
            }
            if (a === b && b === c) {
                win = true;
                break
            }
        }
        if (win) {
            console.log("Win");
            return;
        }
        let tie = false;

    }

    // resets all of the arrays to empty
    _clearArrays = () => {
        _selectionArray.splice(0, _selectionArray.length);
        _playerOneArray.splice(0, _playerOneArray.length);
        _playerTwoArray.splice(0, _playerTwoArray.length);
    }
    // determines if input should be X or O
    _getInput = () => {
        return (_turn ? "X" : "O");
    }
    // draws the input to empty square div
    _drawInput = (square) => {
        square.innerHTML = _getInput();
    }
    // adds the input to _selectionArray
    _inputToSelectionArray = (index) => {
        _selectionArray[index] = _getInput();
    }
    // records the square's index in the playerArray of the player who made it
    _inputToPlayerArray = (index) => {
        _turn ? _playerOneArray.push(index) : _playerTwoArray.push(index);
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
                _clearArrays();
            })
            _turn = true;
        },

        getTurn: () => {
            return _turn;
        },

        getPlayerArrays: () => {
            console.log(_playerOneArray);
            console.log(_playerTwoArray);
            console.log(_selectionArray);
        },

        sortArray: (arr) => {
            arr.sort((a, b) => {
                return a - b;
            })
            return arr;
        }
    };
})();



const displayController = (() => {

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


gameboard.getPlayerArrays()