let paragraphEl = document.getElementById("password-p")
let buttonEl = document.getElementById("button")

function genKey() {

    let length = 12,
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#=?"
    output = ""

    for (let i = 0; i < length; i++) {
        output += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    paragraphEl.textContent = output
}

function resetPass() {
    paragraphEl.textContent = ""
}