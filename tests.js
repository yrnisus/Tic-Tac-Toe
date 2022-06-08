     // for (let outerCounter = 0; outerCounter < _winArray.length; outerCounter++) {
        //     //walks through _winArray[][]
        //     for (let innerCounter = 0; innerCounter < _winArray[outerCounter].length; innerCounter++) {
        //         for (let playerArrayCounter = 0; playerArrayCounter < _winArray[outerCounter].length; playerArray++) {
        //             if (_winArray[outerCounter][innerCounter].includes(playerArray[playerArrayCounter])) {
        //                 contains = true;
        //                 console.log('true inside');
        //             } else {
        //                 contains = false;
        //                 break;
        //             }
        //         }
        //     }
        // }


        // let contains = false;
        // //walks through _winArray[]
        // for (let outerCounter = 0; outerCounter < _winArray.length; outerCounter++) {
        //     //walks through _winArray[][]
        //     for (let innerCounter = 0; innerCounter < _winArray[outerCounter].length; innerCounter++) {
        //         for (let i = 0; i < test.length; i++) {
        //             if (test.includes(playerArray[i])) {
        //                 contains = true;
        //                 console.log('true inside');
        //             } else {
        //                 contains = false;
        //                 break;
        //             }
        //         }
        //     }
        // }
        






        //need to check each value of playerArray
        //0, 2, 4 , 8
        //0, 4, 8 are a winning combination
        // playerArray.forEach((e) => {
        //         //0 fire, 8 fire, 4 fire, 2 fire
        //         //see if playerArray[index] appears the index array of _winArray if 2 = for(_winArray[0] = [0,1,2])
        //         console.log(e);
        //         //walking through _winArray
        //         for (let outerCounter = 0; outerCounter < _winArray.length; outerCounter++) {
        //             // _winArray[0] = [0,1,2]
        //             for (let innerCounter = 0; innerCounter < _winArray[outerCounter].length; innerCounter++) {
        //                 // if 0 = 0
        //                 if(e==_winArray[outerCounter][innerCounter]) {
        //                     console.log("match");
        //                     break;
        //                 }
        //             }
        //         }
        //     })



        // walks through the _winArray array
        // e is the array of values at the index of WinArray
        //console.log(e)
        //         (3) [0, 1, 2]
        // script.js:62 (3) [3, 4, 5]
        // script.js:62 (3) [6, 7, 8]
        // script.js:62 (3) [0, 3, 6]
        // script.js:62 (3) [1, 4, 7]
        // script.js:62 (3) [2, 5, 8]
        // script.js:62 (3) [0, 4, 8]
        // script.js:62 (3) [2, 4, 6]




        // _winArray.forEach((e) => {
        //     //I want to walk through the array e

        //     // check the value of e[index] to see if its a match for any of the numbers in playerArray
        //     //0, 2 , 4

        //     // can i .include playerArray to look for e?


        //         for (let i = 0; i < playerArray.length; i++) {
        //         for (let winCounter = 0; winCounter < 3; winCounter++)  {
        //             if (e[winCounter] == playerArray[i])
        //                 console.log("match");
        //         }
        //     }
        // })

    

        // spent hours on this ended up using the code from
        // https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn

        // Working Code

        // // boolean win var
        // let win = false;
        // // walks through the _winArray[]
        // for (let i = 0; i < _winArray.length; i++) {
        //     // assigns value of _winArray[][]
        //     const winCombo = _winArray[i];


        //     //  _selectionArray[index] contains input at square

        //     let a = _squares[winCombo[0]].innerHTML;
        //     let b = _squares[winCombo[1]].innerHTML;
        //     let c = _squares[winCombo[2]].innerHTML;
        //     // if the squares are empty skips
        //     if (a === '' || b === '' || c === "") {
        //         continue;
        //     }
        //     if (a === b && b === c) {
        //         win = true;
        //         break
        //     }
        // }
        // if (win) {
        //     console.log("Win");
        //     return;
        // }



        // for (let i = 0; i <_winArray.length; i++) {
        //     //_selectionArray contains the input at indexes of the selected squares
        //     let [a, b, c] = [_selectionArray[_winArray[i][0]], _selectionArray[_winArray[i][1]], _selectionArray[_winArray[i][2]]];
        //     // check if those squares are empty then skip
        //     if (a === '' || b === '' || c === "") {
        //         continue;
        //     }
        //     // if they contain same value then winner
        //     if (a === b && b === c) {
        //         win = true;
        //         console.log("win");
        //         break;
        //     }
        // }


        // _checkTie = () => {
        //     return _selectionArray.every(e => e === !null);
        // }