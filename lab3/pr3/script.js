
function checkAge() {
    const age = Number(document.getElementById("age"));
    const e = document.getElementById("error");
    const res = document.getElementById("result");
    const answer = document.getElementById("result-text");
    const loginDiv = document.querySelector(".login");
    
    if (age <= 18) {
        answer.textContent = "Нельзя (Age: " + age + ")";
        answer.style.color = "red";
    } 
    else {
        answer.textContent = "Можно (Age: " + age + ")";
        answer.style.color = "green";
    }

    loginDiv.style.display = "none";
    res.style.display = "flex";
}

function Back() {
    const resultContainer = document.getElementById("result");
    const loginDiv = document.querySelector(".login");
    
    resultContainer.style.display = "none";
    loginDiv.style.display = "block";
}