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

    }