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
        .catch(error => console.log(error));
}

// client post data and append li to ul on button click
let button = document.getElementById('button').addEventListener('click', e =>{
    e.preventDefault();
    let title = document.getElementById("title");
    let body = document.getElementById("body");     
    let ul = document.getElementById("test");
    let li = document.createElement("li");    
    if (title.value && body.value===null){
        document.body.innerHTML = "<h1>F C</h1>";
    }else {
        axios.post('http://localhost:3002/api', {
                title: title.value,
                body: body.value
        })
        .then(response => {
            let dataSend = JSON.parse(response.config.data);
            let title = dataSend.title;
            let body = dataSend.body;    
            li.innerHTML = `Title:${title} and Message:${body}`;
            ul.appendChild(li);                       
            console.log(dataSend);       
        })
        .catch(error => {
           console.log(error);
        });
    }        
});

getData();
