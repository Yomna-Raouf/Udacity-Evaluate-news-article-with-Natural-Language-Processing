const { urlChecker } = require('./urlChecker');

function handleSubmit(event) {
    event.preventDefault();
    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    if (urlChecker(formText)) {

    postData(formText)
    .then(function(res) {
        console.log('client side response', res);
        document.getElementById('irony').innerHTML = `<span> Irony: </span> ${res.irony}`;
        document.getElementById('confidence').innerHTML = `<span> Confidence: </span> ${res.confidence}`;
        document.getElementById('subjectivity').innerHTML = `<span> Subjectivity: </span>  ${res.subjectivity}`;
        document.getElementById('polarity').innerHTML = `<span> Polarity: </span> ${res.score_tag}`;
    })
  } else {
    alert = "Please enter valid URL";
}
}

const postData = async(url ="") => {
    const response = await fetch('http://localhost:8083/test', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {"url": url }),
        });

        try {
            const newData = await response.json();
            console.log(newData);
            return newData;
        } catch (error) {
            console.log("error", error);
        }
}

export { handleSubmit }


