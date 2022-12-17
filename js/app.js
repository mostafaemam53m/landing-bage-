/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// satrt  build the nav

let navbar__list = document.querySelector("#navbar__list");
let nav_li = document.createElement("li")
let nav_link = document.createElement("a")
let sections = document.querySelectorAll("section");
for (let i = 0; i < sections.length; i++) {
    let nav_li = document.createElement("li")
    let nav_link = document.createElement("a")
    nav_link.setAttribute("href", `#section${i+1}`); //Add an id to make scrolling, and in css we add the smooth property
    nav_link.setAttribute("class", "menu__link");
    nav_link.innerHTML = `section${i+1}`;
    nav_li.appendChild(nav_link);
    navbar__list.append(nav_li);
}
// end  build the nav


window.addEventListener("scroll", () => {
    let scrollPosition = this.window.scrollY;
    sections.forEach((section) => {
        // console.log(scrollPosition - section.offsetTop + section.offsetHeight)
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.50 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.50
        ) {
            let section_id = section.attributes.id.value;
            removeactive();
            addactive(section_id);
        }

    });
});

function removeactive() {
    // remove active from all sections
    document.querySelectorAll("section").forEach((el) => {
        el.classList.remove("your-active-class");
    });


}

function addactive(id) {
    // add active to section 
    document.querySelector(`#${id}`).classList.add("your-active-class");


}

// Add class 'active' to section when near top of viewport

/*
Scroll to anchor ID using scrollTO event

This is another way to scroll, but the first method is faster and easier

*/
/*
  document.querySelector("#navbar__list").addEventListener("click", (e) => {
    console.log(e.target.innerHTML)
    let test = document.querySelector(`#${e.target.innerHTML}`).offsetTop;
    window.scrollTo({
            top: test,
            behavior: "smooth",
        })

})

 */

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active