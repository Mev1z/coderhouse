//Hace referencia al boton de añadir cuaderno de ideas
// Wait for the DOM to load
window.onload = function() {
    const insert = document.getElementById("insert");
    insert.addEventListener("click", function() {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".pdf,.doc,.docx"; 
        fileInput.onchange = handleFileSelect;
        fileInput.click();
    });
};

function handleFileSelect(event) {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
};
fileInput.addEventListener("change", handleFileSelect){

};
const reader = new FileReader();
reader.onload = function(event) {
    const fileContent = event.target.result;
    console.log("File Content:", fileContent);
};
reader.readAsText(selectedFile){

};
//Aqui hace referencia a la pagina de ingreso
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (isValidEmail(email) && isValidPassword(password)) {
            console.log('Valid Email:', email);
            console.log('Valid Password:', password);
        } else {
            const errorElement = document.createElement('p');
            errorElement.innerText = 'Please enter a valid email and password.';
            errorElement.style.color = 'red';
            document.getElementById('loginForm').appendChild(errorElement);
        };

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function isValidPassword(password) {
        return password.length >= 6;
    }
