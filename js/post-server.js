
const form = document.getElementById('myForm');

form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);

    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj);

    fetch('http://localhost:3000/users',{
        method: "POST",
        body: JSON.stringify(formDataObj)
    })
};


