var turn = 'X';
var isWin = false;

const changeTurn = () => {
    turn = turn == 'X' ? "0" : 'X';
}

const checkForWin = () => {
    let boxTexts = document.querySelectorAll(".boxText");


    let win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    win.forEach((e) => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            isWin = true;
        }
    })
}

let boxes = document.querySelectorAll('.box');

for (let box of boxes) {
    box.addEventListener("click", (e) => {
        let boxText = e.target.querySelector(".boxText");
        if (boxText.innerText == '' && !isWin) {
            boxText.innerText = turn;
            changeTurn();
            document.querySelector(".info").innerHTML = "Turn for <b>" + turn + "</b>";
            checkForWin();
            if (isWin) {
                let turnn = turn == 'X' ? "0" : 'X';
                document.querySelector(".info").innerHTML = "<b>" + turnn + '</b> Wins';
                document.querySelector(".trophy").style.display = "block";
                document.querySelector(".celeb").style.display = "block";
            }
        }
    })
}

var reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    // let boxText = document.querySelectorAll(".boxText");
    // boxText.forEach((e) => {
    //     e.innerText = "";
    // })
    location.reload();
})