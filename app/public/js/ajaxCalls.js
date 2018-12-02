
   axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e8eb66fb9bf57b062d311bfbe93a79b4')
       .then(response => {
           console.log(response);
       })
       .catch(error => {
           console.log(error);
       });