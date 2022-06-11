/* Rule of thumb: if you only ever need ONE of something 
(gameBoard, displayController), use a module. If you need multiples of something (players!), 
create them with factories. */

const gameboard = (() => {
    // selects all of the square divs
    const _squares = document.querySelectorAll(".square");
    const _resetBtn = document.querySelector('.reset-btn');
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

        callback = (e) => {}
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
                displayController.drawLine(i, winNum);
                // _getDrawnLineXY(winNum);
                // displayController.highlightWinner(winNum);
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
    const resetSVG = document.querySelector('.reset-btn');
    const gameboardContainer = document.querySelector(('.gameboard-container'));
    const resultText = document.getElementById('result-text');
    const svgContainer = document.querySelector('.svg-container');
    const svgContainerMobile = document.querySelector('.svg-container-mobile');
    const line = document.querySelector('line');
    const lineMobile = svgContainerMobile.querySelector('line');

    function _privateMethod() {
        console.log(_score);
    }

    _changeBgColor = () => {

        //fun function to change the background color on game completed
        const colorArray = [
            "8895B3","8E94F2","9FA0FF",
            "BBADFF","DAB6FC","FF958C",
            "A7C4B5","A9D8B8","BEFFC7",
            "F1E0C5","C9B79C","E5DADA",
            "A2D6F9","E9FAE3","FFFFFF",
            "AC92A6","EDCF8E","DEC4A1",
            "BFEDEF","98E2C6","E3DE8F",
            "EDFBC1","D9D375", "EADEDA"
        ]
        let color = colorArray[Math.floor(Math.random()*colorArray.length)]
        console.log(color);
        document.body.style.backgroundColor = `#${color}`;
    }
    // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    _checkIfMobile = () => {
        if (window.matchMedia("(min-width: 450px)").matches) {
            /* the viewport is at least 400 pixels wide */
            return false;
          } else {
            /* the viewport is less than 400 pixels wide */
            return true;
          }
    };


    _displayResult = () => {

    }
    _displayWin = () => {
        return gameboard.getInput();
    }

    _displayTie = () => {
        return 'Tie';
    }

    // I want to draw a line between the two points but I cannot figure this out

    _drawLine = (i, winNum) => {
        console.log(_checkIfMobile());
        // // Bruh I tried to get this to work for hours

        // mobile
        if (_checkIfMobile()) {
            const _svgXYArrayMobile = [
                [0, 60, 300, 60],
                [0, 166, 300, 166],
                [0, 260, 300, 260],
                [50, 0, 50, 300],
                [150, 0, 150, 300],
                [250, 0, 250, 300],
                [0, 5, 295, 295],
                [5, 305, 30, 5] //btm left to top
            ];
            lineMobile.setAttribute("x1", `${_svgXYArrayMobile[i][0]}`);
            lineMobile.setAttribute("y1", `${_svgXYArrayMobile[i][1]}`);
            lineMobile.setAttribute("x2", `${_svgXYArrayMobile[i][2]}`);
            lineMobile.setAttribute("y2", `${_svgXYArrayMobile[i][3]}`);

            svgContainerMobile.classList.add('show');
            lineMobile.classList.add('animate');
        }
        // desktop
        else {
            const _svgXYArray = [
                // horizontals
                [0, 107, 600, 107],
                [0, 307, 600, 307],
                [0, 507, 600, 507],
                // verticals
                [100, 0, 100, 607], 
                [307, 0, 307, 607],
                [507, 0, 507, 607],
                // diags
                [0, 0, 599, 600],
                [5, 600, 607, 10] //btm left to top
            ];

            line.setAttribute("x1", `${_svgXYArray[i][0]}`);
            line.setAttribute("y1", `${_svgXYArray[i][1]}`);
            line.setAttribute("x2", `${_svgXYArray[i][2]}`);
            line.setAttribute("y2", `${_svgXYArray[i][3]}`);

            svgContainer.classList.add('show');
            line.classList.add('animate');
        }
    }

    _clearResult = () => {
        const gameboardContainer = document.querySelector('.gameboard-container');
        gameboardContainer.classList.remove('show');
        svgContainer.classList.remove('show');
        line.classList.remove('animate');
        svgContainerMobile.classList.remove('show');
        lineMobile.classList.remove('animate');

        resetSVG.classList.add('active');
        _changeBgColor();
        //bad
        setTimeout(() => {
            resetSVG.classList.remove('active');
        }, 1000);

    }
        // hide the refresh button
        // display player name input
        // display choice of AI vs player



    return {
        greeting: () => {
            const titleArray = ['T', 'I', 'C', 'T','A','C','T', 'O', 'E'];
            document.querySelectorAll(".square").forEach((square, i) => {
                square.innerHTML = titleArray[i];
            })
         
        },

        // get win or tie from gameboard, change the background of gameboard object to show winner
        displayResult: _displayResult,
        clearResult: _clearResult,
        drawLine: _drawLine,
        changeBgColor:_changeBgColor
    };
})();

document.onload = displayController.greeting();

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