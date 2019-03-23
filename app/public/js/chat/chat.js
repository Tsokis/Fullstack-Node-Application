 const form = document.querySelector(".chat");
 const input = document.querySelector(".input");
 const messages = document.querySelector(".messages");
 const username = prompt("Please enter a username: ");
 const apMs = document.querySelector(".appended-message");

 
 function onEnter(name){
    const p = document.createElement("P");
    p.innerText = name;
    apMs.appendChild(p);
    console.log(apMs);
 }

function addMessage(message) {
    const li = document.createElement("li");
    li.innerText = message;
    messages.appendChild(li);
}
window.addEventListener('DOMContentLoaded', () => {
    console.log(username);
    onEnter(`You have entered as: ${username}`);
    setTimeout(() => {
        apMs.style.display = 'none';
    }, 5000);
});
form.addEventListener("submit", e => {
    e.preventDefault();
    addMessage(`${username}: ${input.value}`);
    input.value = "";
});

 