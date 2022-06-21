/* Rule of thumb: if you only ever need ONE of something 
(gameBoard, displayController), use a module. If you need multiples of something (players!), 
create them with factories. */

const gameboard = (() => {
    // selects all of the square divs
    const _squares = document.querySelectorAll(".square");
    const _resetBtn = document.querySelector('.reset-btn');
    const _opponentBtn = document.querySelectorAll('.opponent-btn')
    const _playerOpponentBtn = document.querySelector('.player-opponent-btn');
    const _computerOpponentBtn = document.querySelector('.computer-opponent-btn');
    const _difficultyBtn = document.querySelectorAll('.difficulty-btn');
    let _turn = true;
    let clickable = true;
    let computerOpponent = false;

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
                if (clickable) {
                    _playerTurn(square, index);
                }
            })
        });
        // Reset gameboard and _selectionArray on click
        _resetBtn.addEventListener('click', () => {
            gameboard.reset();
            displayController.clearResult()
        });

        _opponentBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.classList.add('selected');
                // call function to toggle active btn selection
                _toggleOpponent(_opponentBtn, i);
            })
        });
        _difficultyBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.classList.add('selected');
                // call function to toggle active btn selection
                _toggleOpponent(_difficultyBtn, i);
            })
        });

        //turns off AI selection
        _playerOpponentBtn.addEventListener('click', () => {
            document.getElementById("difficulty-container").style.display = "none";
            document.getElementById('p2Name').style.display = "flex";
            computerOpponent = false;
        })
        //turns on AI selection
        _computerOpponentBtn.addEventListener('click', () => {
            document.getElementById("difficulty-container").style.display = "flex";
            document.getElementById('p2Name').style.display = "none";
            computerOpponent = true;
        })

        callback = (e) => {}
    }
    // toggles _turn
    _changeTurn = () => {
        _turn = !_turn;
        displayController.displayPlayerTurnHUD();
    }
    // checks to see if the squares empty
    _checkSquareEmpty = (square) => {
        if (square.innerHTML === "")
            return true;
    }

    _checkTie = () => {
        return !_selectionArray.includes(undefined);
    }

    _checkComputer = () => {
        return computerOpponent;
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
                displayController.highlightSquares(winNum);
                displayController.drawLine(i, winNum);
                //make squares no longer clickable to avoid more inputs
                _makeGameboardUnclickable();
                _changeTurn();
                return true
            }
        }
        if (!win && _checkTie()) {
            console.log('tie');
            _clearArrays();
        }
        return false;
    }

    // resets all of the arrays to empty
    _clearArrays = () => {
        _selectionArray = new Array(9);
        _playerOneArray.splice(0, _playerOneArray.length);
        _playerTwoArray.splice(0, _playerTwoArray.length);
    }

    processTurn = (square, index) => {
        if (_checkSquareEmpty(square)) {
            _inputToSelectionArray(index);
            _inputToPlayerArray(index);
            _drawInput(square);
            _checkWinner();
            if (!_checkWinner())
                _changeTurn();
        }
    }

    _playerTurn = (square, index) => {
        //executes turn on selected square
        processTurn(square, index);
        console.log(_checkWinner())
        if (!_checkWinner())
            if (computerOpponent)
                _computerTurn();
    }
    //handles computer turns
    _computerTurn = () => {
        //pick a random square index
        let empty = false;
        do {
            let index = [Math.floor(Math.random() * _squares.length)];
            let square = _squares[index];
            if (_checkSquareEmpty(square)) {
                processTurn(square, index);
                empty = true;
            }
        } while (!empty)
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

    _makeGameboardUnclickable = () => {
        clickable = false;
    }
    _toggleOpponent = (btnArr, i) => {
        if (i == 0)
            btnArr[1].classList.remove("selected");
        else
            btnArr[0].classList.remove("selected");

    }
    _toggleComputerOpponent = () => {
        computerOpponent != computerOpponent;
    }
    _addEventListeners()


    return {
        reset: () => {
            _squares.forEach((square) => {
                square.innerHTML = "";
                _clearArrays();
                square.style.color = '#000';
            })
            _turn = true;
            clickable = true;
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
        getInput: _getInput,
        checkComputer: _checkComputer
    };
})();


const displayController = (() => {
    const resetSVG = document.querySelector('.reset-btn');
    const gameboardWrapper = document.querySelector(('.gameboard-wrapper'));
    const svgContainer = document.querySelector('.svg-container');
    const svgContainerMobile = document.querySelector('.svg-container-mobile');
    const line = document.querySelector('line');
    const lineMobile = svgContainerMobile.querySelector('line');
    const hud = document.querySelector('.hud')
    const startBtn = document.querySelector('.start-btn');
    const input = document.querySelector('.input-container');
    const squares = document.querySelectorAll(".square");

    let p1Name = "";
    let p2Name = "";

    function _privateMethod() {
        console.log(_score);
    }

    _changeBgColor = () => {

        //fun function to change the background color on game completed
        const colorArray = [
            "8895B3", "8E94F2", "9FA0FF",
            "BBADFF", "DAB6FC", "FF958C",
            "A7C4B5", "A9D8B8", "BEFFC7",
            "F1E0C5", "C9B79C", "E5DADA",
            "A2D6F9", "E9FAE3",
            "AC92A6", "EDCF8E", "DEC4A1",
            "BFEDEF", "98E2C6", "E3DE8F",
            "EDFBC1", "D9D375", "EADEDA"
        ]
        let color = colorArray[Math.floor(Math.random() * colorArray.length)]
        document.body.style.backgroundColor = `#${color}`;
        document.getElementById('hud-player').style.backgroundColor = `#FFF`;
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

    _getPlayerNames = () => {
        p1Name = document.getElementById("p1Name").value;
        p2Name = document.getElementById("p2Name").value;
        let icon = gameboard.getInput();
        if (p1Name.length == 0)
            p1Name = "Player One"
        // check computer
        if (gameboard.checkComputer()) {
            p2Name = "Computer";
        } else if (p2Name.length == 0)
            p2Name = "Player Two"
        _displayPlayerTurnHUD();
    }

    // _displayResult = () => {

    // }

    // _displayWin = () => {
    //     return gameboard.getInput();
    // }

    // _displayTie = () => {
    //     return 'Tie';
    // }


    _drawLine = (i, winNum) => {
        // // Bruh I tried to get this to work for hours

        // mobile
        if (_checkIfMobile()) {
            const _svgXYArrayMobile = [
                [0, 60, 300, 60],
                [0, 166, 300, 166],
                [0, 260, 300, 260],
                [50, 0, 50, 300],
                [155, 0, 155, 300],
                [255, 0, 255, 300],
                [0, 5, 295, 295],
                [5, 305, 305, 5] //btm left to top
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
        // const gameboardContainer = document.querySelector('.gameboard-container');
        // gameboardContainer.classList.remove('show');
        svgContainer.classList.remove('show');
        line.classList.remove('animate');
        svgContainerMobile.classList.remove('show');
        lineMobile.classList.remove('animate');
        _changeBgColor();
        _displayPlayerTurnHUD();
        //bad
    }

    _displayInputs = () => {
        input.style.display = 'flex';
    }
    // hide the refresh button
    // display player name input
    // display choice of AI vs player

    _displayPlayerTurnHUD = () => {
        let icon = gameboard.getInput();
        if (icon == 'X') {
            document.getElementById('hud-player').innerHTML = p1Name;
        } else {
            document.getElementById('hud-player').innerHTML = p2Name;
        }
        document.getElementById('hud-player-icon').innerHTML = icon;
    }

    _highlightSquares = (winNum) => {
        for (let i = 0; i < winNum.length; i++) {
            //go through square array changing bg color of winning squares
            squares[winNum[i]].style.color = 'red';
        }
    }

    return {
        // On start fill the tic-tac-toe board with the title
        start: () => {
            const titleArray = ['T', 'I', 'C', 'T', 'A', 'C', 'T', 'O', 'E'];
            squares.forEach((square, i) => {
                square.innerHTML = titleArray[i];
            })
            // on click hide the clear the board, display player names
            startBtn.addEventListener('click', displayController.showInputScreen);
            gameboardWrapper.addEventListener('click', displayController.showInputScreen);

        },
        showInputScreen: () => {
            // hide the tictactoe board
            gameboardWrapper.style.display = 'none';
            //hide the hud
            hud.style.display = 'none';
            //make player inputs appear
            _displayInputs();
            //display player names

            //reset the arrays

            //show the tictactoe board
            gameboard.reset();

            displayController.clearResult()
            //remove event listeners
            gameboardWrapper.removeEventListener('click', displayController.showInputScreen);
            startBtn.removeEventListener('click', displayController.showInputScreen);

            startBtn.addEventListener('click', displayController.beginGame);
            // document.querySelector('.start-btn').style.display = "none";
            // resetSVG.style.opacity = "1";

        },
        beginGame: () => {
            //get playernames
            _getPlayerNames();
            //hide input container
            input.style.display = 'none';
            //show tic-tac-toe board
            gameboardWrapper.style.display = 'flex';
            //show hud
            hud.style.display = 'flex';
            hud.style.visibility = 'visible';
            //hide start btn
            document.querySelector('.start-wrapper').style.display = 'none';
            //show reset btn
            document.querySelector('.reset-wrapper').style.display = 'flex';
            resetSVG.style.display = "block";
            resetSVG.style.opacity = "1";
            resetSVG.addEventListener('click', () => {
                resetSVG.classList.add('active');
                setTimeout(() => {
                    resetSVG.classList.remove('active');
                }, 1500)
            })
        },


        // get win or tie from gameboard, change the background of gameboard object to show winner
        clearResult: _clearResult,
        drawLine: _drawLine,
        changeBgColor: _changeBgColor,
        displayPlayerTurnHUD: _displayPlayerTurnHUD,
        highlightSquares: _highlightSquares
    };
})();

document.onload = displayController.start();

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