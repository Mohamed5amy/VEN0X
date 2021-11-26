// Start Mega Menu Onclick 
let otherLinksBtn = document.querySelector(".other");
let megaMenu = document.querySelector(".other .mega-menu")
otherLinksBtn.addEventListener("click", function (){
    megaMenu.classList.toggle("active")
})
// End Mega Menu Onclick 





















// start scroll to top 
let upBtn = document.querySelector(".up")

window.onscroll = function (){

    if (this.scrollY >= 4000){
        upBtn.classList.add("show")
    }else{
        upBtn.classList.remove("show")
    }
}

upBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
        
    })
}
// end scroll to top 



























// Start Fill TextArea

var textArea = document.querySelector('[name="message"]')
var maxLength = textArea.getAttribute("maxlength")
var tSpan = document.querySelector(".tspan")

textArea.oninput = function(){
    tSpan.style.width = `${(textArea.value.length * 100) / maxLength}%`
    if (textArea.value.length > 200 && textArea.value.length < 250 ) {
        tSpan.style.backgroundColor = "orange"
    }else if(textArea.value.length == 250){
        tSpan.style.backgroundColor = "red"
    }else {
        tSpan.style.backgroundColor = "var(--main-color)"
    }
}

// End Fill TextArea 



























// Start Different Main Color Every Refresh
let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let impty = []
for (let i = 0; i < 6; i++) {
    impty.push(hexCode[Math.floor(Math.random() * hexCode.length)]);
}
let finalColor = `#${impty.join("")}`

let root = document.documentElement;

root.style.setProperty("--main-color", finalColor)
// End Different Main Color Every Refresh



























// Start Count Down
let newYear = new Date("Dec 31, 2021 23:59:59").getTime()
let dateCounter = setInterval(() => {
    let currentTime = new Date().getTime()
    let timeDef = newYear - currentTime;

    let days = Math.floor(timeDef / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeDef % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let mins = Math.floor(timeDef % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(timeDef % (1000 * 60) / (1000));


    document.querySelector(".events .time .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .time .mins").innerHTML = mins < 10 ? `0${mins}` : mins;
    document.querySelector(".events .time .secs").innerHTML = sec < 10 ? `0${sec}` : sec ;

},1000)
// End Count Down




























// Start Make The Stat Counts And Fill The Skills
let stats = document.querySelector(".stats")
let statNumbers = document.querySelectorAll(".stats .number")
let ourSkills = document.querySelector(".our-skills")
let progressSpans = document.querySelectorAll(".our-skills .the-progress span")
let stater = false;

window.addEventListener("scroll", function () {
    if (window.scrollY >= stats.offsetTop - 300) {
        if(!stater) {
            statNumbers.forEach((num) => {
                let goal = num.dataset.goal;
                let statCount = setInterval(() => {
                    num.textContent++;
                    if(num.textContent == goal) {
                        clearInterval(statCount);
                    }
                }, 3000 / goal)
            })
            stater = true;
        }
    } else if (window.scrollY  >= ourSkills.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}) 
// End Make The Stat Counts





























// code to add element to team 
// let container = document.querySelector(".team .container");
// let btn = document.querySelector(".team .add i")
// let form = document.querySelector(".team .the-form")
// let btn2 = document.querySelector(".team .the-form button")
// let input1 = document.querySelector("#name")
// let input2 = document.querySelector("#description")
// let social = document.querySelector(".team .data .social")


// btn.onclick = function () {
//     form.style.display = "block";
// } 
// btn2.onclick = function () {

//     if (input1.value !== "" && input2.value !== ""){
//         container.appendChild(box)
//         form.style.display = "none";
//         h3.textContent = input1.value;
//         p.textContent = input2.value;
//         let file = document.getElementById("img")
//         var path = file.value.slice(12);
//         var mainPath = `../imgs/${path}`
//         theImg.setAttribute("src",mainPath)
//     }
// }



// let box = document.createElement("div");
// box.className = "box"
// let data = document.createElement("div");
// data.className = "data"
// box.appendChild(data)
// let theImg = document.createElement("img")
// data.appendChild(theImg)
// data.appendChild(social)
// let info = document.createElement("div");
// info.className = "info"
// box.appendChild(info)
// let h3 = document.createElement("h3");
// let h3Text = document.createTextNode("Name")
// h3.appendChild(h3Text)
// let p = document.createElement("p");
// let pText = document.createTextNode("Simple Short Description")
// p.appendChild(pText)
// info.appendChild(h3)
// info.appendChild(p)
// console.log(box)