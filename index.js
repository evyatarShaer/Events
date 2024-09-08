function sayHello() {
    alert('Hello');
}



function howMeny()
{
    const inputField = document.getElementById("userInput");
    const div = document.getElementById("div");
    if (inputField.value.length == 5) 
    {
        alert("You have entered: " + inputField.value)
    }
    if (inputField.value.length > 10)
    {
        inputField.style.backgroundColor = "green"
        inputField.style.height = "150px"
        inputField.style.width = "150px"
    }
    if (inputField.value.length > 15) 
    {
        div.style.backgroundColor = "red"
        div.style.height = "150px"
        div.style.width = "150px"
    }
}