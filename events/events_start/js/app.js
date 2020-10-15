document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');


  const button = document.querySelector("#button");       //    # for ID and .for class
  button.addEventListener("click", handleButtonClick);


  const textInput = document.querySelector("#input");     //
  textInput.addEventListener("input", handleInput);


  const select = document.querySelector("#select");  //
  select.addEventListener("change", handleSelectChange);


  const form = document.querySelector("#form");           //  element queryselected on
  form.addEventListener("submit", handleFormSubmit);    // element to listen for  (third thing is the callback)

});


const handleButtonClick = function() {
    const resultParagraph = document.querySelector("#button-result");
    resultParagraph.textContent = "That button has been clicked.";  
};

const handleInput = function(event) {
  const resultInput = document.querySelector("#input-result");
  resultInput.textContent = `you typed ${event.target.value}`;
};

const handleSelectChange = function(event) {
  const resultSelect = document.querySelector("#select-result");
  resultSelect.textContent = `You went with: ${event.target.value}`;    // event.target.value here refers back to the EVENT passed in as a parameter on 2 lines above. My original wording had select in that box.
};

const handleFormSubmit = function(event) {
  event.preventDefault();       //  overrides the default behaviour of the POST request made by forms in HTML which results in a page refresh which we don't want because we loose out JS state.
  console.dir(event.target);    //    this will console.dir every time that submit is pressed on the form.
  const resultParagraph = document.querySelector("#form-result");
  resultParagraph.textContent = `Your name: ${event.target.first_name.value} ${event.target.last_name.value}`;
}