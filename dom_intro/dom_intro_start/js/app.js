document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    title.textContent = "JS says: hey! this is pretty spicy!";

    const welcomeParagraph = document.querySelector("p");
    welcomeParagraph.textContent = "Text has been changed";

    console.dir(title.textContent);
    console.log(title.textContent);
});




// Use document.querySelector to access the paragraph with the ID ‘welcome-paragraph’ from the DOM.
// What is the difference in output when you use console.log and console.dir?
