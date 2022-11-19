
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

const bookImage = document.getElementById("bookImage");
const mainStory = document.getElementById("story");
const choiceOne = document.getElementById("one");
const choiceTwo = document.getElementById("two");
const choiceThree = document.getElementById("three");
const myStart = document.getElementById("start");

let currentRoom = {}


const myStory = {
    "start":
    {
        "story": "You are standing in a path lined with red trees.",
        "one": { "text": "Walk forward", "next": "railroad" },
        "two": { "text": "Listen for birds", "next": "jungle" },
        "three": { "text": "Look down", "next": "mushroom" },
        "image": "images/beautiful_pathway-wallpaper-640x480.jpg",
    },
    "mushroom":
    {
        "story": "You find a strange mushroom.",
        "one": { "text": "Touch it", "next": "None" },
        "two": { "text": "Kick with foot", "next": "None" },
        "three": { "text": "Stand up", "next": "start" },
        "image": "images/poisonous_red_mushroom_macro-wallpaper-640x480.jpg",
    },
    "jungle":
    {
        "story": "Birds lure you into a jungle paradise.",
        "one": { "text": "Take a nap", "next": "None" },
        "two": { "text": "Swim", "next": "railroad" },
        "three": { "text": "Go into trees", "next": "start" },
        "image": "images/jungle_paradise-wallpaper-640x480.jpg",
    },
    "railroad":
    {
        "story": "A old railroad line.",
        "one": { "text": "Listen for birds", "next": "jungle" },
        "two": { "text": "Wait", "next": "None" },
        "three": { "text": "Go into trees", "next": "start" },
        "image": "images/green_forest_6-wallpaper-640x480.jpg",
    },
}

function newRoom(room){
    mainStory.textContent = myStory[room].story
    choiceOne.textContent = myStory[room].one.text
    choiceTwo.textContent = myStory[room].two.text
    choiceThree.textContent = myStory[room].three.text
    bookImage.setAttribute("src", myStory[room].image)

    currentRoom = myStory[room]

}


function setUserName() {
    const myName = prompt("What's your name?")
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = `${myName}'s story`;
    }

}



function hideButtons() {
    document.getElementById('user').disabled = true;
    document.getElementById('start').disabled = true;

}

function hoverBox(event) {
    event.style.border = "1px solid black"
    event.style.border_radius = "20px"
}

function leaveBox(event) {
    event.style.border = ""
}







choiceOne.onmouseover = () => {
    hoverBox(choiceOne)
}
choiceOne.onmouseleave = () => {
    leaveBox(choiceOne)
}
choiceOne.onclick = () => {
    newRoom(currentRoom.one.next)
}

choiceTwo.onmouseover = () => {
    hoverBox(choiceTwo)
}
choiceTwo.onmouseleave = () => {
    leaveBox(choiceTwo)
}
choiceTwo.onclick = () => {
    newRoom(currentRoom.two.next)
}

choiceThree.onmouseover = () => {
    hoverBox(choiceThree)
}
choiceThree.onmouseleave = () => {
    leaveBox(choiceThree)
}
choiceThree.onclick = () => {
    newRoom(currentRoom.three.next)
}

myButton.onclick = () => {
    setUserName()
}

myStart.onclick = () => {
    newRoom("start")
    hideButtons()
}