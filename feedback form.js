let selectedRating = 0;

function rate(value) {
    selectedRating = value;
    let stars = document.querySelectorAll(".rating span");

    stars.forEach((star, index) => {
        star.classList.toggle("active", index < value);
        
    });
}

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let comment = document.getElementById("comment").value;

    if (selectedRating === 0 || comment === "") {
        document.getElementById("msg").innerText = "Please give rating and feedback!";
        document.getElementById("msg").style.color = "red";
    } else {
        document.getElementById("msg").innerText = "Thank you for your feedback!";
        document.getElementById("msg").style.color = "green";
        this.reset();
    }
});
