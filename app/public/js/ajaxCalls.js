const appid='b81babb8580d7007d6bd828861eb6c8c';
axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+appid)
     .then(response => {
         console.log(response);          
          console.log(response.data);
          console.log(response.data.base);
          console.log(response.data.main);
          const output = document.querySelector('.output');          
           //let target = response.data.main;
           let target = response.data.main.temp;
           responseJson = JSON.stringify(target);
           console.log(responseJson);           
           output.innerHTML = responseJson;          
       })
     .catch(error => {
         console.log(error);
       });
    
