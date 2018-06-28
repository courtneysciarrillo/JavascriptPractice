// Make h1 in header have different text

function Header() {
    var x = document.getElementsByTagName("header")[0];
    x.getElementsByTagName("h1")[0].innerHTML = "Hello";
}

// Make nav ul li elements get larger when you hover over them

function Nav() {
    //var x = document.getElementsByTagName("nav")[0];
    //x.getElementsByTagName("ul")[0].style.fontSize = "25px";

    document.getElementById("ulist").style.fontSize = "25px";
}

// Add another element to the main element

function AddP() {
    var x = document.getElementById("xtra")
    x.style.display = "flex";
    x.style.fontSize = "64px";
    document.getElementsByTagName("p")[0].innerText = "Bike Night";
}

// Dynamically change the color of the background on the footer when the user pushes a keyboard key

function Back() {
    document.getElementsByTagName("footer")[0].style.backgroundColor = "red";
}

// Change the font size of the paragraphs in the main element when the user clicks them

function ChangeP() {
    document.getElementsByTagName("p")[0].style.fontSize = "25px";
    document.getElementsByTagName("p")[1].style.fontSize = "35px";
    document.getElementsByTagName("p")[2].style.fontSize = "45px";
}

// Change the text in the footer when the user clicks it

function Foot() {
    document.getElementsByTagName("footer")[0].innerText = "Hello";
}

// Replace container

function Replace() {
    var x = document.getElementById("orig");
    var y = document.getElementById("swap");

    if (x.style.display == "none") {
        x.style.display = "";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "";
    }
}

// Remove the h1 element in the header


// Put something in the place of the h1 in the header


// Change the text in one of the paragraph tags in the main element


// Change the size of the header element to 200px using grid syntax
