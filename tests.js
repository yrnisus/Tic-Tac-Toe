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


              // const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
        //  if(!( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ))
        //     return false;
        // // let check = false;
        // // // if(!( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ))
        // // (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        // // return check;
        // return isMobileDevice;



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
