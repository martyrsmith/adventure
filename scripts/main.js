function multiply(num1, num2) {
    let total = num1 * num2;
    return total
}

function fun() {
    alert("beep")
}


const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


const myImage = document.querySelector("img");
myImage.onclick = () => {
    mySource = myImage.getAttribute("src");
    if (mySource === "images/beautiful_pathway-wallpaper-640x480.jpg") {
        myImage.setAttribute("src", "images/poisonous_red_mushroom_macro-wallpaper-640x480.jpg")
    } else {
        myImage.setAttribute("src", "images/beautiful_pathway-wallpaper-640x480.jpg")
    }
}