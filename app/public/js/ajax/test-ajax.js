//Fetch data from models/Comments
function getData() {
    fetch('http://localhost:3002/api')
    .then(response => response.json())
    .then(data => {
        //select css class .test [for the output]
        let test = document.querySelector('.test');
        data.forEach(value => {
            test.innerHTML += `<li>${value.title} <strong>${value.name}</strong> said: ${value.body}</li>`;
        });
    })
    .catch(error => console.log(error));
}

// client post data and append li to ul on button click and reset fields
let button = document.getElementById('button').addEventListener('click', e =>{
    e.preventDefault();    
    let name = document.getElementById("name")
    let title = document.getElementById("title");
    let body = document.getElementById("body");     
    let ul = document.getElementById("test");
    let li = document.createElement("li");  
    let error = document.getElementById("error");
    error.style.display = 'none';      
    if (name.value || title.value || body.value !==""){
        axios.post('http://localhost:3002/api', {
            title: title.value,
            body: body.value,
            name: name.value
        })
        .then(response => {
            let dataSend = JSON.parse(response.config.data);
            let name = dataSend.name
            let title = dataSend.title;
            let body = dataSend.body;
            li.innerHTML = `For ${title} subject  <strong>${name}</strong> said: ${body}`;
            ul.appendChild(li);
            console.log(dataSend);
            document.commentForm.reset();
        })
        .catch(error => {
            console.log(error);
        });         
        
    }else {
        error.style.display = "block";
        error.innerHTML = `<strong>you must enter the fields</strong>`;
    } 
});

getData();
