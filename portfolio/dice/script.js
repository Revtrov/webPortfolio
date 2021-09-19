let count = 0,
    a,
    array = [];

document.getElementById("diceEdge").classList.remove("diceEdge");

function function1(pageLoad) {
    count++;
    document.getElementById("button").innerHTML = "roll " + count;
    let rannum = Math.floor(Math.random() * 6) + 1;
    const changeFace = (array) => {
        document.getElementById("bottomleft").style.opacity = array[0];
        document.getElementById("bottomright").style.opacity = array[1];
        document.getElementById("topright").style.opacity = array[2];
        document.getElementById("topleft").style.opacity = array[3];
        document.getElementById("middleleft").style.opacity = array[4];
        document.getElementById("middleright").style.opacity = array[5];
        document.getElementById("middle").style.opacity = array[6];
    }
    pageLoad == false ? document.getElementById("diceEdge").classList.add("diceEdge") : null;
    switch (rannum) {
        case 1:
            array = [0, 0, 0, 0, 0, 0, 1]
            break;
        case 2:
            array = [1, 0, 1, 0, 0, 0, 0]
            break;
        case 3:
            array = [1, 0, 1, 0, 0, 0, 1]
            break;
        case 4:
            array = [1, 1, 1, 1, 0, 0, 0]
            break;
        case 5:
            array = [1, 1, 1, 1, 0, 0, 1]
            break;
        case 6:
            array = [1, 1, 1, 1, 1, 1, 0]
            break;
    }
    changeFace(array);
    setTimeout(() => {
        pageLoad == false ? document.getElementById("diceEdge").classList.remove("diceEdge") : null
    }, 500)
}
function1(true);