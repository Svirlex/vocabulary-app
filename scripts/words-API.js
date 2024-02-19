var Api = 'tgsvs2x62qggyfez54gkr7kfqfi270djwq79w532i8mcsk20y'



 

function WordSend(){
    
  // Get the value of the input field
  var inputValue = $('#wordInput').val();
  console.log(inputValue);

  var requestURL = `https://api.wordnik.com/v4/word.json/${inputValue}/definitions?limit=3&includeRelated=false&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=${Api}`


  fetch(requestURL)
    .then(response => response.json())
    .then(data => {

      // Select the div element with the id "definitions"
      var definitionsDiv = document.getElementById('definitions');

      // Remove any existing definitions
      definitionsDiv.innerHTML = `<h2>${inputValue}</h2>
                                  <h3>Transcription</h3>`;
      // Loop through each definition and create an HTML element for it
      data.forEach(element => {
        if (element.text != undefined) {

          var definitionBlock = document.createElement('div');
          definitionBlock.className = 'definition-block';
          definitionBlock.innerHTML = `<p>Definition: ${element.text}</p>`;
          definitionsDiv.appendChild(definitionBlock);
          


        }
      });

    })
    .catch(error => {
      console.error(error);
    });



    
};
