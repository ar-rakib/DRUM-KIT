// const box = document.querySelector(".box")


// const colorChange = (color) => {
//     box.style.backgroundColor = color;
// }

// const bit = (e) => {
//     // if (e.key === 'g') {
//     //     box.style.backgroundColor = "green"
//     // }
//     // if (e.key === 'y') {
//     //     box.style.backgroundColor = "yellow"
//     // }
//     //  if (e.key === 'r') {
//     //     box.style.backgroundColor = "red"
//     // } 
//     // if (e.key === 'v') {
//     //     box.style.backgroundColor = "violet"
//     // } 
//     // if (e.key === 's') {
//     //     box.style.backgroundColor = "silver"
//     // } 
//     // if (e.key === 'o') {
//     //     box.style.backgroundColor = "orange"
//     // } 
//     // if (e.key === 'b') {
//     //     box.style.backgroundColor = "black"
//     // } 
//     // if (e.key === 'a') {
//     //     box.style.backgroundColor = "aqua"
//     // }
//     switch (e.key) {
//         case "g":
//             colorChange("green");
//             break;
//         case "y":
//             colorChange("yellow");
//             break; 
//         case "b":
//             colorChange ("black");
//             break;
//         case "a":
//             colorChange ("aqua");
//             break;
//         default:
//             break;
//     }
// }



// window.onkeydown = bit;



// const boom = document.querySelector('#boom')
// const clap = document.querySelector('#clap')
// const hithat = document.querySelector('#hithat')


// const bit = (e) =>{
//     switch(e.key){
//         case "b":
//             boom.play();
//             break;
//         case "c":
//             clap.play();
//             break;

//         case "h":
//             hithat.play()
//             break;

//     }
// }


const bit = (e) => {
    const key = document.querySelector(`audio[data-key = "${e.key}"]`)
    const button = document.querySelector(`div[data-key = "${e.key}"]`)
    if (!key) {
        return
    }
    button.classList.add("active")
    key.currentTime = 0;
    key.play()
}

const removeClass = (e) => {
    const button = document.querySelector(`div[data-key="${e.key}"]`)
    if (!button) {
        return
    }
    button.classList.remove("active")
}



window.onkeydown = bit
window.onkeyup = removeClass