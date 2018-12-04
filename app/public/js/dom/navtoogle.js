
    document.querySelector('.bar').addEventListener('click', (e) => {
        e.preventDefault();
        let nav = document.getElementById("nav");
        if (nav.className === "main-nav") {
            nav.className += " responsive";
        } else {
            nav.className = "main-nav";
        }
    });

