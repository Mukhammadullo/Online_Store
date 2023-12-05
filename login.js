let error = document.querySelector(".error")
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let email = form.email.value
    let password = form.password.value

    let checking = check(email, password)

    if (checking) {
        window.location.href="logout.html"
    } else {
        error.innerHTML ="You entered the wrong password"
    }
})



function check(email, password) {
    if (email === "1" && password === "1") {
        return true
    } else {
        return false
    }
}