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
    const gameboardContainer = document.querySelector(('.gameboard-container'));
    const resultText = document.getElementById('result-text');
    const svgContainer = document.querySelector('.svg-container');
    const svgContainerMobile = document.querySelector('.svg-container-mobile');
    const line = document.querySelector('line');
    const lineMobile = svgContainerMobile.querySelector('line');


    function _privateMethod() {
        console.log(_score);
    }

    // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    _checkIfMobile = () => {
        let check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

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

    _drawLine = (i, winNum) => {
        // // Bruh I tried to get this to work for hours

        // mobile
        if(_checkIfMobile()) {
            const _svgXYArrayMobile = [
                [0, 60, 300, 60],
                [0, 160, 300, 160],
                [0, 260, 300, 260],
                [50, 0, 50, 300],
                [150, 0, 150, 300],
                [250, 0, 250, 300],
                [0, 5, 295, 295],
                [5, 305, 305, 0]
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
                [0, 107, 600, 107],
                [0, 307, 600, 307],
                [0, 507, 600, 507],
                [100, 0, 100, 600],
                [300, 0, 300, 600],
                [500, 0, 500, 600],
                [0, 0, 599, 600],
                [7, 600, 607, 0]
            ];
    
            line.setAttribute("x1", `${_svgXYArray[i][0]}`);
            line.setAttribute("y1", `${_svgXYArray[i][1]}`);
            line.setAttribute("x2", `${_svgXYArray[i][2]}`);
            line.setAttribute("y2", `${_svgXYArray[i][3]}`);

            svgContainer.classList.add('show');
            line.classList.add('animate');
        }

        // // creates two divs and positions them at the XY coordinates of outer two squares

        // let pointLeft = document.createElement('div');

        // Object.assign(pointLeft.style, {left:`${xyCoordLeft.x}px`, top: `${xyCoordLeft.y}px`})
        // pointLeft.setAttribute("id", "victory-line-left");

        // let pointRight = document.createElement('div');
        // Object.assign(pointRight.style, {left:`${xyCoordRight.x}px`, top: `${xyCoordRight.y}px`})
        // pointRight.setAttribute("id", "victory-line-right");

        // const line = querySelector.getElementById('line');
        // line.sty
        // console.log(line);

        // pointLeft is left of the class svg-container
        // gameboardContainer.appendChild(pointLeft);
        // gameboardContainer.appendChild(pointRight);

        if(isMobile) {
            svgContainerMobile.classList.add('show');
            lineMobile.classList.add('animate');
        }
        else {
            svgContainer.classList.add('show');
            line.classList.add('animate');
        }


    }

    _clearResult = () => {
        const gameboardContainer = document.querySelector(('.gameboard-container'));
        gameboardContainer.classList.remove('show');
        svgContainer.classList.remove('show');
        line.classList.remove('animate');
        svgContainerMobile.classList.remove('show');
        lineMobile.classList.remove('animate');
    }



    return {
        greeting: () => {
            console.log('Hello World');
        },

        // get win or tie from gameboard, change the background of gameboard object to show winner
        displayResult: _displayResult,
        clearResult: _clearResult,
        drawLine: _drawLine,
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