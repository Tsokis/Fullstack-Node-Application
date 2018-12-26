/**
 * Client side Validation
 * Contact.ejs form
 */
const submit = document.querySelector('#submit');
// clear form fields after submit function
function clearAfterSubmit() {
    document.querySelector('#name').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#email').value = '';
}
// client simple validation function
 function clientValidation(e){
     e.preventDefault();
     const name = document.querySelector('#name').value;
     const lastName = document.querySelector('#lastName').value;
     const email = document.querySelector('#email').value;
     const p = document.querySelector('.error');
     const h3 = document.querySelector('.success');
     if (name!==''||lastName!==''||email!==''){
         axios.post('http://localhost:3002/api/contact', {
             name: name,
             lastName: lastName,
             email: email
         }); 
         clearAfterSubmit();
         h3.style.display = 'block';
         h3.textContent = `Your details has been send`;       
     } else {
        p.style.display = 'block';
        p.innerHTML = `<p>You must enter the fields</p>`;
     }
     setTimeout(()=>{
         p.style.display = 'none';
         h3.style.display = 'none';
     },4000);
 }
 // DOM EVENT
submit.addEventListener('click',clientValidation);
 
