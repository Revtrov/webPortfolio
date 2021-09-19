let randomQuote,
    arrayLength,
    ranNum,
    textOut,
    out,
    author;

const preloadImages = (array) => {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    let list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        let img = new Image();
        img.onload = () => {
            let index = list.indexOf(this);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}
fetch("https://type.fit/api/quotes")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        randomQuote = data;
        const randomQuoteGen = () => {
                //sets a variable to the place the quote is going to go
                out = document.getElementById("uncompleted");

                // clears contents of comleted words from last quote
                document.getElementById("completed").innerHTML = "";
                // finds amount of elements in the array and sets it to a variable
                arrayLength = randomQuote.length;
                // makes a random number between 0 and the length of the array
                ranNum = Math.floor(Math.random() * arrayLength);
                // sets a variable to the element at position of the random 
                // number we generated in the array
                textOut = randomQuote[ranNum].text;

                author = randomQuote[ranNum].author

                // sets the text inside of the place its going to go to the quote we picked
                out.innerHTML = textOut;
            }
            // runs the above function once when the document starts so you don't
            // always get the same quote when you load the page
        randomQuoteGen();

        // all future calls of this function will occur on the press of the new text button

        // readies variables for later use
        let stringCompArray = [];
        let stringComp = "";
        let currentText;
        let textWords;
        let inputText;
        let typedWord;
        let stringUnComp = textOut;
        let stringUnCompArray = stringUnComp.split(".");

        // runs the wordCheck function when the space bar is pressed
        document.body.onkeyup = (e) => {
            if (e.keyCode == 32) {
                wordCheck();
            }
        }

        // this function checks if you have completed a word and 
        // if so it removes the word from the uncompleted word 
        // list to the completed word list

        const wordCheck = () => {
            // gets a string of all the uncompleted words
            currentText = document.getElementById("uncompleted").innerHTML;
            // turns the string into an array
            textWords = currentText.split(" ");
            // gets the string in the input box
            inputText = document.getElementById("input").value;
            // makes it an array that is is one word long (may include punctuation at the end)
            typedWord = inputText.split(" ", 1);
            /*console.log(currentText);
            console.log(textWords);
            console.log(typedWord);*/
            // make these variables empty for later use
            stringUnComp = "";
            stringUnCompArray = [""];

            stringUnComp = textOut.split(" ", 1)[0];
            // checks if the first element in the array of all uncompleted words
            // is equal to the word that is currently typed in the text box
            if (textWords[0] == typedWord[0]) {
                // for loop that repeats a proccess the same amount of times as
                // there is elements in the array of uncompleted words
                for (i = 0; i < textWords.length; i++) {
                    // sets stringUnComp to the stringUnComp with string 
                    // textWords[i] + space attached
                    stringUnComp = stringUnComp.concat(textWords[i] + " ");
                    // makes the below array from the string generated above
                    stringUnCompArray = stringUnComp.split(" ");
                }
                // for loop that occurs once
                for (i = 0; i <= 0; i++) {
                    // sets stringComp to the stringComp with string 
                    // textWords[i] + space attached once
                    stringComp = stringComp.concat(textWords[i] + " ");
                    // turns the above string into an array
                    stringCompArray = stringComp.split(" ");
                }
                // adds the first element of the completed array to
                // the uncompleted one
                stringCompArray.push(stringUnCompArray[0]);
                // sets uncompleted strings value to nothing
                stringUnComp = "";
                // this adds the words back to the uncompleted string
                // so it can be placed in the text box
                for (let i = 1; i < stringUnCompArray.length; i++) {
                    stringUnComp = stringUnComp.concat(stringUnCompArray[i] + " ");
                }
                // sets the uncompleted array to the words in the string above
                stringUnCompArray = stringUnComp.split(" ");
                // empties the input box as you have completed the word
                document.getElementById("input").value = "";
                // sets the innerHTML of the uncompleted span to the string 
                // generated above for the uncompleted words
                document.getElementById("uncompleted").innerHTML = stringUnComp;
                // sets the innerHTML of the completed span to the string 
                // generated above for the completed words
                document.getElementById("completed").innerHTML = stringComp;
            } else {
                // occurs if the space bar is pressed before typing a words
                // or when the word is spelt wrong
            }

        }

        const newQuote = () => {
            currentText = document.getElementById("uncompleted").innerHTML;
            textWords = currentText.split(" ");
            stringUnComp = stringUnComp.concat(textWords[1] + " ");
            stringComp = "";
            randomQuoteGen();
            wordCheck();
            document.getElementById("img").src = `https://source.unsplash.com/random/400x400?sig=${Math.floor(Math.random()*100)}`;
        }

        // loops through code that checks whether or not you are 
        // spelling the current word correctly
        const inputCorrectQeury = setInterval(() => {
            //console.log(stringUnComp)
            //console.log(stringUnCompArray)
            let endOfText = randomQuote[ranNum].text.lastIndexOf(".");
            if (stringComp.length - 2 == endOfText) {
                //show author when you finish typing the quote
                document.getElementById("author").innerHTML = "-" + author;

            } else {
                document.getElementById("author").innerHTML = "";
            }
            // gets text in text box
            let input = document.getElementById("input").value;
            // sets variable to length of said text
            let inputLength = input.length;
            // gets the first word of the uncompleted array 
            let firstWord = stringUnComp.split(" ", 1);
            // gets the length of the text in the text box and for every character
            // it checks of both the uncompleted word and the text in textbox match
            for (var i = 0; i < inputLength; i++) {
                if (input.charAt(i) == firstWord[0].charAt(i) || input.charAt(i) == " " || input.charAt(i) == "") {
                    // if spelled correctly it makes the text in the textbox green
                    document.getElementById("input").style.backgroundColor = "green";
                } else {
                    // if spelled incorrectly it makes the text in the textbox red
                    document.getElementById("input").style.backgroundColor = "red";
                }
            }

        }, 100);

        let button = document.querySelector('#newText');
        button.onclick = () => { newQuote(); }
    });
for (let i = 0; i <= 100; i++) {
    preloadImages([`https://source.unsplash.com/random/400x400?sig=${i}`])
}
let progress = 0;
let loading = setInterval(() => {
    document.getElementById("app").style.opacity = "0%";
    document.getElementById("loadingBarBackground").style.opacity = "100%";
    progress += 0.029;
    document.getElementById("progress").style.width = progress + "%";
    if (progress >= 100 || document.readyState === 'complete') {
        document.getElementById("progress").style.width = "100%";
        clearInterval(loading);
        document.getElementById("loadingBarBackground").style.opacity = "0%";
        document.getElementById("app").style.opacity = "100%";
    }
})