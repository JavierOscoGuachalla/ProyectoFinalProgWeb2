document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    

    let nombres = document.getElementById('nombres').value.trim();
    let apellidos = document.getElementById('apellidos').value.trim();
    let email = document.getElementById('email').value.trim();
    let edad = document.getElementById('edad').value.trim();
    let direccion = document.getElementById('direccion').value.trim();
    let pais = document.getElementById('pais').value;
    let comentarios = document.getElementById('comentarios').value.trim();
    

    const termsCheckbox = document.getElementById("terms");
    const genderRadio = document.querySelector('input[name="gender"]:checked');


    if (!nombres || !apellidos || !email || !edad || !direccion || !comentarios ||
        !termsCheckbox.checkValidity() ||
        genderRadio === null)  {
        alert('Por favor, complete todos los campos.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Por favor, ingrese un email válido.');
        return;
    }
    
    if (!validateAges(edad)) {
        alert('Por favor, ingrese edades válidas separadas por comas.');
        return;
    }
    
    alert('Formulario enviado correctamente.');
    // Aquí puedes agregar el código para enviar el formulario
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateAges(ages) {
    const re = /^(\d{1,3})(,\s*\d{1,3})*$/;
    return re.test(ages);
}