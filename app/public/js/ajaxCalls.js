
   axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b81babb8580d7007d6bd828861eb6c8c')
       .then(response => {
           console.log(response);
       })
       .catch(error => {
           console.log(error);
       });

console.log(2+2);