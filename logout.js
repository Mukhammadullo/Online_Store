let btn_logout = document.querySelector(".btn_logout")
btn_logout.onclick = () => {
    window.location.replace("login.html")
}

let cntTotal = document.querySelector(".cntTotal")
let counterTotal = 0


let card = document.querySelector(".card")
let result1 = document.querySelector(".result1")
let result2 = document.querySelector(".result2")
let result3 = document.querySelector(".result3")
let result4 = document.querySelector(".result4")
let result5 = document.querySelector(".result5")
let result6 = document.querySelector(".result6")
let result7 = document.querySelector(".result7")
let result8 = document.querySelector(".result8")

let btnSum1 = document.querySelector(".btnSum1")
let btnSum2 = document.querySelector(".btnSum2")
let btnSum3 = document.querySelector(".btnSum3")
let btnSum4 = document.querySelector(".btnSum4")
let btnSum5 = document.querySelector(".btnSum5")
let btnSum6 = document.querySelector(".btnSum6")
let btnSum7 = document.querySelector(".btnSum7")
let btnSum8 = document.querySelector(".btnSum8")

let btnMinus1 = document.querySelector(".btnMinus1")
let btnMinus2 = document.querySelector(".btnMinus2")
let btnMinus3 = document.querySelector(".btnMinus3")
let btnMinus4 = document.querySelector(".btnMinus4")
let btnMinus5 = document.querySelector(".btnMinus5")
let btnMinus6 = document.querySelector(".btnMinus6")
let btnMinus7 = document.querySelector(".btnMinus7")
let btnMinus8 = document.querySelector(".btnMinus8")

let cnt1 = 0
let cnt2 = 0
let cnt3 = 0
let cnt4 = 0
let cnt5 = 0
let cnt6 = 0
let cnt7 = 0
let cnt8 = 0

let cntShop = 0

let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")
let card5 = document.querySelector(".card5")
let card6 = document.querySelector(".card6")
let card7 = document.querySelector(".card7")
let card8 = document.querySelector(".card8")

let forCard = document.querySelector(".forCard")

btnSum1.onclick = () => {
    result1.innerHTML = cnt1 += 1
    card.innerHTML = cntShop += 1
    cntTotal.innerHTML = counterTotal += 43
    forCard.append(card1)
}
btnSum2.onclick = () => {
    result2.innerHTML = cnt2 += 1
    card.innerHTML = cntShop += 1
    cntTotal.innerHTML = counterTotal += 100
    forCard.append(card2)
}
btnSum3.onclick = () => {
    result3.innerHTML = cnt3 += 1
    card.innerHTML = cntShop += 1
    cntTotal.innerHTML = counterTotal += 25
    forCard.append(card3)
}
btnSum4.onclick = () => {
    result4.innerHTML = cnt4 += 1
    card.innerHTML = cntShop += 1
    cntTotal.innerHTML = counterTotal += 300
    forCard.append(card4)
}
btnSum5.onclick = () => {
    result5.innerHTML = cnt5 += 1
    card.innerHTML = cntShop += 1
    cntTotal.innerHTML = counterTotal += 13
    forCard.append(card5)
}
btnSum6.onclick = () => {
    result6.innerHTML = cnt6 += 1
    card.innerHTML = cntShop += 1
    cntTotal.innerHTML = counterTotal += 73
    forCard.append(card6)
}
btnSum7.onclick = () => {
    result7.innerHTML = cnt7 += 1
    card.innerHTML = cntShop += 1
    cntTotal.innerHTML = counterTotal += 343
    forCard.append(card7)
}
btnSum8.onclick = () => {
    result8.innerHTML = cnt8 += 1
    card.innerHTML = cntShop += 1
    cntTotal.innerHTML = counterTotal += 63
    forCard.append(card8)
}

// Minus

let cards = document.querySelector(".cards")

btnMinus1.onclick = () => {
    result1.innerHTML -= 1
    card.innerHTML -= 1
    cntTotal.innerHTML -= 43
    cards.append(card1)
}

btnMinus2.onclick = () => {
    result2.innerHTML -= 1
    card.innerHTML -= 1
    cntTotal.innerHTML -= 100
    cards.append(card2)
}
btnMinus3.onclick = () => {
    result3.innerHTML -= 1
    card.innerHTML -= 1
    cntTotal.innerHTML -= 25
    cards.append(card3)
}
btnMinus4.onclick = () => {
    result4.innerHTML -= 1
    card.innerHTML -= 1
    cntTotal.innerHTML -= 300
    cards.append(card4)
}
btnMinus5.onclick = () => {
    result5.innerHTML -= 1
    card.innerHTML -= 1
    cntTotal.innerHTML -= 13
    forCard.remove(card5)
    cards.append(card5)
}
btnMinus6.onclick = () => {
    result6.innerHTML -= 1
    card.innerHTML -= 1
    cntTotal.innerHTML -= 73
    cards.append(card6)
}
btnMinus7.onclick = () => {
    result7.innerHTML -= 1
    card.innerHTML -= 1
    cards.append(card7)
}
btnMinus8.onclick = () => {
    result8.innerHTML -= 1
    card.innerHTML -= 1
    cntTotal.innerHTML -= 63
    cards.append(card8)
}



let dialogShop = document.querySelector(".dialogShop")
let head_card = document.querySelector(".head_card")
head_card.onclick = () => {
    dialogShop.showModal()
}


let cancelBtn = document.querySelector(".cancelBtn")
cancelBtn.onclick = () => {
    dialogShop.close()
}

let clearBtn = document.querySelector(".clearBtn")
clearBtn.onclick = () => {
    cntTotal.innerHTML = 0
    card.innerHTML = 0
    result1.innerHTML = 0
    result2.innerHTML = 0
    result3.innerHTML = 0
    result4.innerHTML = 0
    result5.innerHTML = 0
    result6.innerHTML = 0
    result7.innerHTML = 0
    result8.innerHTML = 0
    card1.remove()
}