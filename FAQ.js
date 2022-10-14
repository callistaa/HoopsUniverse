const contentQuestion = document.querySelectorAll(".question");

contentQuestion.forEach(contentQuestion => {
    contentQuestion.addEventListener("click", event => {
        const currentlyActiveContentQuestion = document.querySelector(".question.active");
        if(currentlyActiveContentQuestion && currentlyActiveContentQuestion!=contentQuestion){
            currentlyActiveContentQuestion.classList.toggle("active");
            currentlyActiveContentQuestion.nextElementSibling.style.maxHeight = 0;
        }

        contentQuestion.classList.toggle("active");
        const contentAnswer = contentQuestion.nextElementSibling;
        if(contentQuestion.classList.contains("active")) {
            contentAnswer.style.maxHeight = contentAnswer.scrollHeight + "px";
        }
        else {
            contentAnswer.style.maxHeight = 0;
        }
    });
});
