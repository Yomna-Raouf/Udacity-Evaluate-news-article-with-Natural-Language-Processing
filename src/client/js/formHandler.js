const { urlChecker } = require('./urlChecker');

// handling URLL Form submition
const handleSubmit = (event) =>  {
    event.preventDefault();

    // Validating user input
    let userUrl = document.getElementById('name').value;

    if (urlChecker(userUrl)) {
        postData(userUrl)
            .then((res) =>  {
                let html = `
                    <div id="irony"> <span> Irony: </span> ${res.irony} </div>
                    <div id="confidence"> <span> Confidence: </span> ${res.confidence} </div>
                    <div id="subjectivity"> <span> Subjectivity: </span>  ${res.subjectivity} </div>
                    <div id="polarity"> <span> Polarity: </span> ${res.score_tag} </div>
                `
                document.getElementById('results').innerHTML = html ;
            })
    } else {
        alert("Please enter valid URL");
    }
}

// POSTING User Input to server
const postData = async (url = "") => {
    try {
        const response = await fetch('http://localhost:8083/NLP', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( { url }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export { handleSubmit }


