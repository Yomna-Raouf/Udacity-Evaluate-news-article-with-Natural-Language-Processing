const { urlChecker } = require('./urlChecker');


// Global Variables
const NlpResultsContainer = document.querySelector('#results');
const ArticleUrlInput = document.querySelector('#Article__url');


// handling URLL Form submition
const handleSubmit = async (event) =>  {
    event.preventDefault();

    // Validating user input
    const userUrl = ArticleUrlInput.value;

    try {
        if (urlChecker(userUrl)) {
            const mockAPIData = await postData(userUrl);
            const mockAPIDataObj = await mockAPIData.json();
            const html = `
                <div id="irony"> <span> Irony: </span> ${mockAPIDataObj.irony} </div>
                <div id="confidence"> <span> Confidence: </span> ${mockAPIDataObj.confidence} </div>
                <div id="subjectivity"> <span> Subjectivity: </span>  ${mockAPIDataObj.subjectivity} </div>
                <div id="polarity"> <span> Polarity: </span> ${mockAPIDataObj.score_tag} </div>
            `
            NlpResultsContainer.innerHTML = html ;
        } else {
            alert("Please enter valid URL");
        }
    } catch(e) {
        console.log(e.message)
    }

   
}

// POSTING User Input to server
const postData =  (url) => {
  return  fetch('http://localhost:8083/test', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { url }),
    })
}

export { handleSubmit }


