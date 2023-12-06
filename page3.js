let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

let btnSee = document.querySelector(".btnSee")
btnSee.onclick = () => {
    window.location.replace = "login.html"
}

next.addEventListener('click', function () {
    let items = document.querySelectorAll(".item")
    document.querySelector('.slide').appendChild(items[0])
}
)



prev.addEventListener('click', function () {
    let items = document.querySelectorAll(".item")
    document.querySelector('.slide').prepend(items[items.length - 1])
}
)
