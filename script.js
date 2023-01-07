const userInput = document.querySelector(".user-input")
const resultDiv = document.querySelector(".result-text")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateString(){
    userInput.addEventListener("input",function(){
        //Removing previous result
        resultDiv.textContent = ""

        let length = userInput.value
        let randomNumber

        if (length == 0) {
            resultDiv.textContent = "Random string will show up here"
        }

        for(let i = 0; i < length; i++){
            //Generating random number
            randomNumber = Math.ceil(Math.random()*characters.length - 1)
            console.log(randomNumber)
            
            resultDiv.textContent += characters[randomNumber]
        }
    })
}

generateString()