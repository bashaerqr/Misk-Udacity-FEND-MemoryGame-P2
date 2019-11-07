//cardList
const cardList = document.querySelectorAll('.card');

//random disply card game
let uls = document.querySelectorAll('.deck');
for (let j = 0; j < uls.length; j++) {
    let ul = uls.item(j);
    for (let i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
}

let openCard = [];
let matchedCards = [];

let secCounter = 0;
let minCounter = 0;
let time;

//start time function
function timedCount() {
    secCounter++;
    if (secCounter === 60) {
        secCounter = 0;
        minCounter++;
    }
    document.querySelector("#time").innerHTML = minCounter + ":" + secCounter;
    console.log("counterSec: " + secCounter);
    time = setTimeout(timedCount, 1000);
}

let isFirstClick = true;
let movedCounter = 0;
let move;
for (const card of cardList) {
    card.addEventListener('click', function () {
        //start count moves
        move = document.querySelector('.moves');
        move.innerHTML = movedCounter;
        movedCounter++;

        if (isFirstClick) {
            // Start our timer
            timedCount();
            // Change our First Click indicator's value
            isFirstClick = false;
        }

        const FirstCard = openCard[0];
        const SecondCard = this;

        if (openCard.length === 1) {
            card.classList.add("open", "show");
            openCard.push(this);

            //check if mached!
            if (FirstCard.innerHTML === SecondCard.innerHTML) {
                console.log('matched!');
                FirstCard.classList.add("match");
                SecondCard.classList.add("match");

                //add matched cards to matchedCards array
                matchedCards.push(FirstCard, SecondCard);
                //reset openCard array 
                openCard = [];

                /* Game over 
                  check if all cards open and matched
                  then display alert contain the end time, moves and rating
                */
                if (matchedCards.length === cardList.length) {

                    //rating condition
                    let star = "★";
                    let starr = document.querySelector('.stars');
                    starr.innerHTML = star;

                    if (movedCounter < 15) {
                        starr.innerHTML = star + star + star;

                    } else if (movedCounter < 50) {
                        starr.innerHTML = star + star;

                    } else {
                        starr.innerHTML = star;
                    }

                    // stop time
                    clearTimeout(time);

                    //display alert
                    alert("Congratulate \n" + "moved: " + movedCounter + "\n" + "Rate: " + star + "\n" + "Time: " + time + " seconds");
                }

            } else {
                FirstCard.classList.add("unmatched");
                SecondCard.classList.add("unmatched");

                setTimeout(function () {
                    FirstCard.classList.remove("show", "open", "unmatched");
                    SecondCard.classList.remove("show", "open", "unmatched");
                    openCard = [];
                }, 500);
            }

        } else {
            card.classList.add("open", "show");
            openCard.push(this);
        }

    });
}

















