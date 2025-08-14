// Diogo show more and show less btn

const diogoMoreDiv = document.getElementById("diogo-more-btn");
const diogoMoreBtn = document.getElementById("diogo-more-btn");
const diogoLessDiv = document.getElementById("diogo-less-div");
const diogoLessBtn = document.getElementById("diogo-less-btn");
const diogoContent = document.getElementById("diogo-content");
const diogoView = document.getElementById("diogo-view");

diogoMoreBtn.addEventListener("click", ()=> {
    diogoContent.style.display = "block";
    diogoLessDiv.style.display = "flex";
    diogoMoreDiv.style.display = "none";

    diogoContent.scrollIntoView({behavior: "smooth", block: "start"});
})

diogoView.addEventListener("click", ()=> {
    diogoContent.style.display = "block";
    diogoLessDiv.style.display = "flex";
    diogoMoreDiv.style.display = "none";

    diogoContent.scrollIntoView({behavior: "smooth", block: "start"});
})

diogoLessBtn.addEventListener("click", () => {
    diogoView.scrollIntoView({ behavior: "smooth", block: "start" });

    // Wait for the scroll to happen before hiding
    setTimeout(() => {
        diogoContent.style.display = "none";
        diogoMoreDiv.style.display = "flex";
        diogoLessDiv.style.display = "none";
    }, 600); // matches smooth scroll timing
});