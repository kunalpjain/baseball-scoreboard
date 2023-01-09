let home_timer = 0
let guest_timer = 0

let home_timer_el = document.getElementById("home-timer")
let guest_timer_el = document.getElementById("guest-timer")

function addOneToHome() {
    home_timer += 1
    home_timer_el.textContent = home_timer
}

function addTwoToHome() {
    home_timer += 2
    home_timer_el.textContent = home_timer
}

function addThreeToHome() {
    home_timer += 3
    home_timer_el.textContent = home_timer
}

function addOneToGuest() {
    guest_timer += 1
    guest_timer_el.textContent = guest_timer
}

function addTwoToGuest() {
    guest_timer += 2
    guest_timer_el.textContent = guest_timer
}

function addThreeToGuest() {
    guest_timer += 3
    guest_timer_el.textContent = guest_timer
}

function resetHome() {
    home_timer = 0
    home_timer_el.textContent = home_timer
}

function resetGuest() {
    guest_timer = 0
    guest_timer_el.textContent = guest_timer
}