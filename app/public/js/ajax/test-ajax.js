//Fetch data from models/Comments
function getData() {
    fetch('http://localhost:3002/api')
    .then(response => response.json())
    .then(data => {
        //select css class .test [for the output]
        let test = document.querySelector('.test');
        data.forEach(value => {            
            test.innerHTML += `<li>Comment Title: ${value.title} and Comment Body: ${value.body}</li>`;
        });
    })
    .catch(err => console.log(err));
}

getData();