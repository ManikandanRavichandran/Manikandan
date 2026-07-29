// Smooth scrolling for navigation links

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(event){

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});



// Welcome message in browser console

console.log(
    "Welcome to Manikandan's Portfolio Website"
);



// Highlight navigation while scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 100){

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "white";

        if(link.getAttribute("href") === "#" + current){

            link.style.color = "#38bdf8";

        }

    });

});
