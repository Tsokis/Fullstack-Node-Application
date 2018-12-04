
const appid='b81babb8580d7007d6bd828861eb6c8c';
axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+appid)
     .then(response => {
         console.log(response);
          output = document.querySelector('.output');
          output.innerHTML = JSON.stringify(response.data);
       })
     .catch(error => {
         console.log(error);
       });
    
