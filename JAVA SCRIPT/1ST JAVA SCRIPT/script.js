document.addEventListener("DOMContentLoaded", function () {
    var numbersDiv = document.getElementById("numbers");

    for (var i = 1; i <= 100; i++) {
        var number = document.createElement("p");
        number.textContent = i;
        numbersDiv.appendChild(number);
    }
});
