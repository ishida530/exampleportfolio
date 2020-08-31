const mainDiv = document.querySelector(".main");
const aboutDiv = document.querySelector(".about");

const portfolioDiv = document.querySelector(".portfolio");
const contactDiv = document.querySelector(".contact");

const main = document.getElementById('1').addEventListener("click", () => {


    mainDiv.style.display = "block";
    aboutDiv.style.display = "none";
    portfolioDiv.style.display = "none";
    contactDiv.style.display = "none"

})
const about = document.getElementById('2').addEventListener("click", () => {
    console.log("dziala");
    mainDiv.style.display = "none"
    aboutDiv.style.display = "block"
    portfolioDiv.style.display = "none";
    contactDiv.style.display = "none"

})
const portfolio = document.getElementById('3').addEventListener("click", () => {


    mainDiv.style.display = "none";
    aboutDiv.style.display = "none";
    portfolioDiv.style.display = "block";
    contactDiv.style.display = "none"

})
const contact = document.getElementById('4').addEventListener("click", () => {


    mainDiv.style.display = "none";
    aboutDiv.style.display = "none";
    portfolioDiv.style.display = "none";
    contactDiv.style.display = "block"

})
const inputName = document.getElementById("name");
const messageName = document.getElementById("message");
const btn = document.querySelector("button").addEventListener("click", (e) => {

    e.preventDefault()

    if (inputName.value.length <= 2 || messageName.value.length <= 5) {
        inputName.value = "";
        messageName.value = "";
        return alert("Wrong completed form!")
    } else alert("Message was sent!")

})
