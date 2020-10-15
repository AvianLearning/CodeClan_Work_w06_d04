document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    title.textContent = "JS says: hey! this is pretty spicy!";

    // const welcomeParagraph = document.querySelector("p");
    const welcomeParagraph = document.querySelector("#welcome-paragraph");

    welcomeParagraph.textContent = "Text has been changed";

    console.dir(welcomeParagraph);  // calls up all of the prperties and meothds on an object.
    console.log(welcomeParagraph);


    const redThings = document.querySelectorAll(".red");
    redThings.forEach(element => {
        element.classList.add("bold");
    });

    const redListItem = document.querySelector("li.red");
    redListItem.textContent = "RED!!!";

    //CREATING ELEMENTS:

    const newListItem = document.createElement("li");
    newListItem.textContent = "Purple";
    newListItem.classList.add("purple");
    
    const list = document.querySelector("ul");
    list.appendChild(newListItem);

    console.log(newListItem);
});



//  TASK (5 mins)
// Use document.querySelector to access the paragraph with the ID ‘welcome-paragraph’ from the DOM.
// What is the difference in output when you use console.log and console.dir?

