let paragraphEl = document.getElementById("password-p")
let buttonEl = document.getElementById("button")
let passwordStrongOrWeak = document.getElementById("password-sw")

function genKey() {

    let length = 12,
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#=?"
    output = ""

    for (let i = 0; i < length; i++) {
        output += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    paragraphEl.textContent = output

    let hasLetter = /[a-zA-Z]/.test(output)
    let hasSymbol = /[!@#=?]/.test(output)
    
    if (hasLetter && hasSymbol) {
       passwordStrongOrWeak.textContent = "Strong Password"
       passwordStrongOrWeak.style.color = "Green"
    } else {
       passwordStrongOrWeak.textContent = "Weak Password"
       passwordStrongOrWeak.style.color = "Red"
    }
}

function resetPass() {
    paragraphEl.textContent = ""
    passwordStrongOrWeak.textContent = ""
}

