const appid ='enter your api key id';
axios.get('https://api.openweathermap.org/data/2.5/weather?q=Larissa,gr&units=metric&appid=' + appid)
     .then((response) => {
         console.log(response);          
         console.log(response.data);
         console.log(response.data.weather[0].icon);
         console.log(response.data.base);
         console.log(response.data.main);       
         const city = document.querySelector('.name');
         const presdis = document.querySelector('.p');  
         const icon = document.querySelector('.icon');
         const weatherInfo = document.querySelector('.info');
         let cityResponse = response.data.name;
         city.innerHTML = cityResponse;
         //image 
         let image = "http://openweathermap.org/img/w/"+response.data.weather[0].icon+".png";         
         console.log(image);
         icon.src = image;
        //main and description from weather object
         let main = response.data.weather[0].main;
         let desc = response.data.weather[0].description;
         weatherInfo.innerHTML = `<strong>Weather is ${main}<br>${desc}</strong>`;
         //main object iteration
         let target2 = response.data.main
         for (var key in target2) {
             console.log(key, target2[key]);
             presdis.innerHTML += `<ul class="object"><li>Todays ${key} is ${target2[key]}!</li></ul>`;
         }    
       })
        .catch((error) => {
         console.log(error);
        });
    