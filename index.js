let home_timer = 0
let guest_timer = 0

let home_timer_el = document.getElementById("home-timer")
let guest_timer_el = document.getElementById("guest-timer")
let home_timer_border_el = document.getElementById("home-timer")
let guest_timer_border_el = document.getElementById("guest-timer")

function addOneToHome() {
    home_timer += 1
    home_timer_el.textContent = home_timer
    highlightProperBox()
}

function addTwoToHome() {
    home_timer += 2
    home_timer_el.textContent = home_timer
    highlightProperBox()
}

function addThreeToHome() {
    home_timer += 3
    home_timer_el.textContent = home_timer
    highlightProperBox()
}

function addOneToGuest() {
    guest_timer += 1
    guest_timer_el.textContent = guest_timer
    highlightProperBox()
}

function addTwoToGuest() {
    guest_timer += 2
    guest_timer_el.textContent = guest_timer
    highlightProperBox()
}

function addThreeToGuest() {
    guest_timer += 3
    guest_timer_el.textContent = guest_timer
    highlightProperBox()
}

function resetHome() {
    home_timer = 0
    home_timer_el.textContent = home_timer
    highlightProperBox()
}

function resetGuest() {
    guest_timer = 0
    guest_timer_el.textContent = guest_timer
    highlightProperBox()
}

function highlightProperBox() {
    if (home_timer > guest_timer) {
        guest_timer_border_el.classList.remove("highlight")
        home_timer_border_el.classList.add("highlight")
    } else if (home_timer < guest_timer) {
        home_timer_border_el.classList.remove("highlight")
        guest_timer_border_el.classList.add("highlight")
    } else {
        removeHighlights()
    }
}

function removeHighlights() {
    home_timer_border_el.classList.remove("highlight")
    guest_timer_border_el.classList.remove("highlight")
}