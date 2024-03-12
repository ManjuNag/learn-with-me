let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

function showConfirmation() {
    document.getElementById("confirmationPopup").style.display = "block";
    setTimeout(function () {
        document.getElementById("confirmationPopup").style.display = "none";
    }, 3000); // Hide after 3 seconds (adjust as needed)
}