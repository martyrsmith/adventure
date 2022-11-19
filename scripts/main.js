
function setUserName() {
    const myName = prompt("What's your name?")
    if (!myName){
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = `${myName}'s story`;
    }

}


const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");


// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `${myName}'s story`;
// }

myButton.onclick = () => {
    setUserName()
}



// myHeading.textContent = "Hello world!";


const myImage = document.querySelector("img");
myImage.onclick = () => {
    mySource = myImage.getAttribute("src");
    if (mySource === "images/beautiful_pathway-wallpaper-640x480.jpg") {
        myImage.setAttribute("src", "images/poisonous_red_mushroom_macro-wallpaper-640x480.jpg")
    } else {
        myImage.setAttribute("src", "images/beautiful_pathway-wallpaper-640x480.jpg")
    }
}