let query = document.getElementById("search-show1");
let searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click",() => {
    axios.get("http://api.tvmaze.com/search/shows?q=" + query.value)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            let responseArray = res.data;
            let output = document.querySelector('.output');
            // let icon = document.getElementById("icon");
            //test
            responseArray.forEach((item) => {
                // let image = item.show.image.medium;
                // console.log(image);
                output.innerHTML += `<li>${item.show.name} with rating ${item.show.rating.average}</li><br>
                <li>${item.show.genres} and currently ${item.show.status}</li>`;
                //image output works but if null from the api doesn't display
                // icon.src += `${image}`;
            });            
        })
        .catch((error) => {
            console.log(error);
        });
});
