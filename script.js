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

    let _selectionArray = new Array(9);
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
                    _checkWinner();
                    _changeTurn();
                }
            })
        });
        // Reset gameboard and _selectionArray on click
        _resetBtn.addEventListener('click', () => {
            gameboard.reset();
            displayController.clearResult()
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

    _checkTie = () => {
        return !_selectionArray.includes(undefined);
    }

    _checkWinner = () => {
        let win = false;
        // Win State
        // _playerOneArray [0, 3, 4, 8] winner
        //_playerTwoArray [2,5,6]
        //_winArray[i][0,4,8]
        // loop through winArray to get find the correct array
        for (let i = 0; i < _winArray.length; i++) {
            let winNum = _winArray[i];
            //_selectionArray contains the input at indexes of the selected squares
            // let [a, b, c] = [_selectionArray[_winArray[i][0]], _selectionArray[_winArray[i][1]], _selectionArray[_winArray[i][2]]];
            let [a, b, c] = [_selectionArray[winNum[0]], _selectionArray[winNum[1]], _selectionArray[winNum[2]]];
            // check if those squares are empty then skip
            if (a == null || b == null || c == null) {
                continue;
            }
            // if they contain same value then winner
            if (a === b && b === c) {
                win = true;
                console.log("win");
                // _getDrawnLineXY(winNum);
                displayController.highlightWinner(winNum);
                displayController.displayResult();
                break;
            }
        }
        if (!win && _checkTie()) {
            console.log('tie');
            _clearArrays();
            displayController.displayResult();
        }
    }

    // resets all of the arrays to empty
    _clearArrays = () => {
        _selectionArray = new Array(9);
        _playerOneArray.splice(0, _playerOneArray.length);
        _playerTwoArray.splice(0, _playerTwoArray.length);
    }
    // determines if input should be X or O
    _getInput = () => {
        return (_turn ? "X" : "O");
    }

    // _getDrawnLineXY = (winNum) => {
    //     // get the xy coords of the of outer two square divs
    //     let rectLeft = _squares[winNum[0]].getBoundingClientRect();
    //     let rectRight = _squares[winNum[2]].getBoundingClientRect();

    //     function Coordinates(x, y) {
    //         this.x = x,
    //             this.y = y
    //     };
    //     // square div is different sizes on mobile vs desktop need to find the midpoint
    //     const xyCoordLeft = new Coordinates(((rectLeft.right + rectLeft.left) / 2), ((rectLeft.bottom + rectLeft.top) / 2));
    //     console.log(xyCoordLeft.x, xyCoordLeft.y);
    //     const xyCoordRight = new Coordinates(((rectRight.right + rectRight.left) / 2), ((rectRight.bottom + rectRight.top) / 2));
    //     console.log(xyCoordRight.x, xyCoordRight.y);

    //     displayController.drawLine(xyCoordLeft, xyCoordRight);
    // }

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
        reset: () => {
            _squares.forEach((square) => {
                square.innerHTML = "";
                _clearArrays();
            })
            _turn = true;
        },

        show: () => {
            console.log(_selectionArray);
        },

        getTurn: () => {
            return _turn;
        },

        sortArray: (arr) => {
            arr.sort((a, b) => {
                return a - b;
            })
            return arr;
        },
        getInput: _getInput
    };
})();


const displayController = (() => {
    const gameboardContainer = document.querySelector(('.gameboard-container'));
    const resultText = document.getElementById('result-text');

    function _privateMethod() {
        console.log(_score);
    }

    _displayResult = (state) => {
        // if (state === 'Win')
        //     resultText.innerHTML = _displayWin()
        // else
        //     resultText.innerHTML = _displayTie();
        // gameboardContainer.classList.add('show');
    }
    _displayWin = () => {
        return gameboard.getInput();
    }

    _displayTie = () => {
        return 'Tie';
    }

    // I want to draw a line between the two points but I cannot figure this out

    // _drawLine = (xyCoordLeft, xyCoordRight) => {
    //     // creates two divs and positions them at the XY coordinates of outer two squares
    //     let pointLeft = document.createElement('div');

    //     Object.assign(pointLeft.style, {left:`${xyCoordLeft.x}px`, top: `${xyCoordLeft.y}px`})
    //     pointLeft.setAttribute("id", "victory-line-left");

    //     let pointRight = document.createElement('div');
    //     Object.assign(pointRight.style, {left:`${xyCoordRight.x}px`, top: `${xyCoordRight.y}px`})
    //     pointRight.setAttribute("id", "victory-line-right");

    //     // const line = querySelector.getElementById('line');
    //     // line.sty
    //     // console.log(line);

    //     gameboardContainer.appendChild(pointLeft);
    //     gameboardContainer.appendChild(pointRight);
    // }

    _clearResult = () => {
        const gameboardContainer = document.querySelector(('.gameboard-container'));
        gameboardContainer.classList.remove('show');
    }


    return {
        greeting: () => {
            console.log('Hello World');
        },
        // get win or tie from gameboard, change the background of gameboard object to show winner
        displayResult: _displayResult,
        clearResult: _clearResult
        // drawLine: _drawLine
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