document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');


  const button = document.querySelector("#button");       //    # for ID and .for class
  button.addEventListener("click", handleButtonClick);


  const textInput = document.querySelector("#input");     //
  textInput.addEventListener("input", handleInput);


  const selectElement = document.querySelector("#select");  //
  selectElement.addEventListener("select", handleSelect);

});


const handleButtonClick = function() {
    const resultParagraph = document.querySelector("#button-result");
    resultParagraph.textContent = "That button has been clicked.";  
};


const handleInput = function(event) {
  const resultInput = document.querySelector("#input-result");
  resultInput.textContent = `you typed ${event.target.value}`;

  console.log(event);
};


const handleSelect= function(select) {
  const resultSelect = document.querySelector("#select-result");
  resultSelect.textContent = `You went with:`;

  console.log(select);
};