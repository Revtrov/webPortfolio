let pos1 = 1,
    pos2 = 1,
    order = 1;
const counterOn = (array, counter) => {
        for (let i = 1; i <= 100; i++) {
            document.getElementById("counter" + i + counter).style.opacity = "0%";
        }
        for (let j = 0; j < array.length; j++) {
            console.log("counter" + array[j] + counter)
            document.getElementById("counter" + array[j] + counter).style.opacity = "100%";
        }
    },
    changeFace = (array) => {
        document.getElementById("bottomleft").style.opacity = array[0];
        document.getElementById("bottomright").style.opacity = array[1];
        document.getElementById("topright").style.opacity = array[2];
        document.getElementById("topleft").style.opacity = array[3];
        document.getElementById("middleleft").style.opacity = array[4];
        document.getElementById("middleright").style.opacity = array[5];
        document.getElementById("middle").style.opacity = array[6];
    },
    helper = (number, array, player) => {
        player == "a" ? pos1 += number : pos2 += number;
        changeFace(array);
    },
    diceRoll = (player) => {
        let rannum = Math.floor(Math.random() * 6) + 1;
        let array = [];
        switch (rannum) {
            case 1:
                array = [0, 0, 0, 0, 0, 0, 1];
                helper(rannum, array, player)
                break;
            case 2:
                array = [1, 0, 1, 0, 0, 0, 0]
                helper(rannum, array, player)
                break;
            case 3:
                array = [1, 0, 1, 0, 0, 0, 1]
                helper(rannum, array, player)
                break;
            case 4:
                array = [1, 1, 1, 1, 0, 0, 0]
                helper(rannum, array, player)
                break;
            case 5:
                array = [1, 1, 1, 1, 0, 0, 1]
                helper(rannum, array, player)
                break;
            case 6:
                array = [1, 1, 1, 1, 1, 1, 0]
                helper(rannum, array, player)
                break;
        }
    },
    playerJump = (player, pos, type) => {
        player == "a" ? pos1 = pos : pos2 = pos;
        player == "a" ? counterOn([pos1], player) : counterOn([pos2], player);
        type == "ladder" ? document.getElementById("message").innerHTML = "you went up a ladder!" : document.getElementById("message").innerHTML = "you went down a snake!";

    },
    playerWin = (player) => {
        document.getElementById("counter100" + player).style.opacity = "100%";
        document.getElementById("background-win").style.opacity = "70%";
        document.getElementById("win").style.opacity = "100%";
        document.getElementById("win-button").style.opacity = "100%";
        document.getElementById("win").innerHTML = "Well Done Player " + player + " You Have Won!";
    },
    playerGo = (pos, player) => {
        if (pos != 9 || pos != 16 || pos != 53 || pos != 59 || pos != 87 || pos != 100) {
            counterOn([pos], player);
        } else if (pos2 >= 100) {
            playerWin(player)
        }
        switch (pos) {
            case 9:
                playerJump(player, 12, "ladder");
                break
            case 16:
                playerJump(player, 2, "snake");
                break
            case 53:
                playerJump(player, 27, "ladder");
                break
            case 59:
                playerJump(player, 100, "ladder");
                playerWin(player)
                break
            case 87:
                playerJump(player, 12, "snake");
                break

        }
    }
counterOn([1], "a")
counterOn([1], "b");

function player1() {
    if (order <= 1) {
        order++;
        counterOn([], "a");
        diceRoll("a");
        playerGo(pos1, "a")
    }
}

function player2() {
    if (order >= 2) {
        order--;
        counterOn([], "b");
        diceRoll("b");
        playerGo(pos2, "b")
    }
}


function winRestart() {
    pos1 = 1;
    pos2 = 1;
    counterOn([1], "a");
    counterOn([1], "b");
    document.getElementById("background-win").style.opacity = "0%";
    document.getElementById("win").style.opacity = "0%";
    document.getElementById("win-button").style.opacity = "0%";
}