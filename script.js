const option = document.querySelector("#score");
let maxScore = 5;
let h1 = document.querySelector("#h1");
option.addEventListener('click', (e) => {
    reset();
    maxScore = e.target.value;
})
let c1 = 0;
let c2 = 0;
const btn1 = document.querySelector("#p1");
const btn2 = document.querySelector("#p2");
const btn3 = document.querySelector("#reset");
let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
btn1.addEventListener('click', (e) => {
    c1 += 1;
    s1.innerText = c1;
    s2.innerText = c2;
    if (c1 == maxScore) {
        s1.style.color = "green";
        s2.style.color = "red";
        btn1.disabled = true;
        btn2.disabled = true;
    }

})
btn2.addEventListener('click', (e) => {
    c2 += 1;
    s1.innerText = c1;
    s2.innerText = c2;
    if (c2 == maxScore) {
        s2.style.color = "green";
        s1.style.color = "red";
        btn1.disabled = true;
        btn2.disabled = true;
    }

})
btn3.addEventListener('click', (e) => {
    reset();
})

function reset() {
    c1 = 0;
    c2 = 0;
    s2.style.color = "black";
    s1.style.color = "black";
    s1.innerText = "0";
    s2.innerText = "0";
    btn1.disabled = false;
    btn2.disabled = false;
}