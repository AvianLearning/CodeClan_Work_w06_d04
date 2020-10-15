document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');


  const button = document.querySelector("#button");       //    # for ID and .for class
  button.addEventListener("click", handleButtonClick);


  const textInput = document.querySelector("#input");     //
  textInput.addEventListener("input", handleInput);


  const select = document.querySelector("#select");  //
  select.addEventListener("change", handleSelectChange);


  const form = document.querySelector("#form");           //  queryselector on
  form.addEventListener("submit", handleFormSubmit);    // element to listen for

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
  event.preventDefault();
  console.dir(event.target);    //    this will console.dir every time that submit is pressed on the form.
  const resultParagraph = document.querySelector("#form-result");
  resultParagraph.textContent = `Your name: ${event.target.first_name.value} ${event.target.last_name.value}`;
}