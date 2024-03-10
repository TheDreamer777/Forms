document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("myForm");
    let inputField = document.getElementById("inputField");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        let alphanumericRegex = /^[a-zA-Z0-9]+$/;
        let inputValue = inputField.value.trim();
        
        if (!alphanumericRegex.test(inputValue)) {
            showError("Input is not alphanumeric");
        } else {
            clearError();
            alert("Form submitted successfully!");
        }
    });
    
    function showError(message) {
        let errorMessage = document.getElementById("errorMessage");
        if (!errorMessage) {
            errorMessage = document.createElement("div");
            errorMessage.id = "errorMessage";
            form.insertBefore(errorMessage, inputField.nextSibling);
        }
        errorMessage.textContent = message;
    }
    
    function clearError() {
        let errorMessage = document.getElementById("errorMessage");
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});

