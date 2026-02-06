/**
 * Application de révision – Logique du quiz
 */

(function () {
    "use strict";

    // === DOM Elements ===
    const screenHome = document.getElementById("screen-home");
    const screenQuiz = document.getElementById("screen-quiz");
    const screenResults = document.getElementById("screen-results");

    const selectTheme = document.getElementById("select-theme");
    const selectCount = document.getElementById("select-count");
    const checkShuffle = document.getElementById("check-shuffle");
    const btnStart = document.getElementById("btn-start");

    const quizProgress = document.getElementById("quiz-progress");
    const quizScore = document.getElementById("quiz-score");
    const progressFill = document.getElementById("progress-fill");
    const quizThemeBadge = document.getElementById("quiz-theme-badge");
    const questionType = document.getElementById("question-type");
    const questionText = document.getElementById("question-text");
    const questionHint = document.getElementById("question-hint");

    const answerZone = document.getElementById("answer-zone");
    const answerInput = document.getElementById("answer-input");
    const btnValidate = document.getElementById("btn-validate");

    const correctionZone = document.getElementById("correction-zone");
    const correctAnswer = document.getElementById("correct-answer");
    const explanationBox = document.getElementById("explanation-box");
    const explanationText = document.getElementById("explanation-text");
    const yourAnswer = document.getElementById("your-answer");
    const btnCorrect = document.getElementById("btn-correct");
    const btnIncorrect = document.getElementById("btn-incorrect");

    const finalScore = document.getElementById("final-score");
    const finalTotal = document.getElementById("final-total");
    const finalMessage = document.getElementById("final-message");
    const reviewSection = document.getElementById("review-section");
    const reviewList = document.getElementById("review-list");
    const successSection = document.getElementById("success-section");
    const successList = document.getElementById("success-list");
    const btnRetryErrors = document.getElementById("btn-retry-errors");
    const btnRestart = document.getElementById("btn-restart");
    const btnHome = document.getElementById("btn-home");

    // === State ===
    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let results = []; // { question, userAnswer, correct (bool) }

    // Theme labels
    const THEME_LABELS = {
        agricoles: "Espaces agricoles",
        industriels: "Espaces industriels",
        services: "Espaces de services",
        definitions: "Définitions"
    };

    // === Utilities ===
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function showScreen(screen) {
        [screenHome, screenQuiz, screenResults].forEach(function (s) {
            s.classList.remove("active");
        });
        screen.classList.add("active");
    }

    // === Start Quiz ===
    function startQuiz(questionSet) {
        var theme = selectTheme.value;
        var countVal = selectCount.value;
        var doShuffle = checkShuffle.checked;

        // Filter by theme
        var filtered;
        if (questionSet) {
            filtered = questionSet;
        } else if (theme === "all") {
            filtered = [...QUESTIONS];
        } else {
            filtered = QUESTIONS.filter(function (q) {
                return q.theme === theme;
            });
        }

        // Shuffle
        if (doShuffle) {
            filtered = shuffle(filtered);
        }

        // Limit count
        if (countVal !== "all") {
            var count = parseInt(countVal, 10);
            filtered = filtered.slice(0, count);
        }

        if (filtered.length === 0) {
            alert("Aucune question disponible pour cette sélection.");
            return;
        }

        currentQuestions = filtered;
        currentIndex = 0;
        score = 0;
        results = [];

        showScreen(screenQuiz);
        displayQuestion();
    }

    // === Display Question ===
    function displayQuestion() {
        var q = currentQuestions[currentIndex];
        var total = currentQuestions.length;

        quizProgress.textContent = "Question " + (currentIndex + 1) + " / " + total;
        quizScore.textContent = "Score : " + score;
        progressFill.style.width = ((currentIndex / total) * 100) + "%";

        quizThemeBadge.textContent = THEME_LABELS[q.theme] || q.theme;
        questionType.textContent = q.type;
        questionText.textContent = q.question;
        questionHint.textContent = q.hint || "";

        // Reset zones
        answerInput.value = "";
        answerZone.style.display = "flex";
        correctionZone.classList.add("hidden");
        answerInput.focus();
    }

    // === Show Correction ===
    function showCorrection() {
        var q = currentQuestions[currentIndex];
        var userAns = answerInput.value.trim();

        correctAnswer.textContent = q.answer;

        if (q.explanation) {
            explanationBox.style.display = "block";
            explanationText.textContent = q.explanation;
        } else {
            explanationBox.style.display = "none";
        }

        yourAnswer.textContent = userAns || "(pas de réponse)";

        answerZone.style.display = "none";
        correctionZone.classList.remove("hidden");
    }

    // === Handle Self-Evaluation ===
    function handleEval(isCorrect) {
        var q = currentQuestions[currentIndex];
        var userAns = answerInput.value.trim();

        if (isCorrect) {
            score++;
        }

        results.push({
            question: q,
            userAnswer: userAns,
            correct: isCorrect
        });

        currentIndex++;

        if (currentIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }

    // === Show Results ===
    function showResults() {
        var total = currentQuestions.length;

        finalScore.textContent = score;
        finalTotal.textContent = "/ " + total;

        // Message
        var pct = (score / total) * 100;
        if (pct === 100) {
            finalMessage.textContent = "Parfait ! Tu maîtrises ce chapitre !";
        } else if (pct >= 80) {
            finalMessage.textContent = "Très bien ! Encore quelques points à revoir.";
        } else if (pct >= 60) {
            finalMessage.textContent = "Pas mal ! Continue à réviser pour progresser.";
        } else if (pct >= 40) {
            finalMessage.textContent = "Il reste du travail, courage !";
        } else {
            finalMessage.textContent = "Il faut reprendre ce chapitre en détail.";
        }

        // Score circle color
        var circle = document.querySelector(".score-circle");
        if (pct >= 80) {
            circle.style.borderColor = "#2ec4b6";
            finalScore.style.color = "#2ec4b6";
        } else if (pct >= 50) {
            circle.style.borderColor = "#f59e0b";
            finalScore.style.color = "#f59e0b";
        } else {
            circle.style.borderColor = "#e63946";
            finalScore.style.color = "#e63946";
        }

        // Build review cards
        var errors = results.filter(function (r) { return !r.correct; });
        var successes = results.filter(function (r) { return r.correct; });

        // Errors
        if (errors.length > 0) {
            reviewSection.classList.remove("hidden");
            btnRetryErrors.classList.remove("hidden");
            reviewList.innerHTML = "";
            errors.forEach(function (r) {
                reviewList.appendChild(createReviewCard(r, false));
            });
        } else {
            reviewSection.classList.add("hidden");
            btnRetryErrors.classList.add("hidden");
        }

        // Successes
        if (successes.length > 0) {
            successSection.classList.remove("hidden");
            successList.innerHTML = "";
            successes.forEach(function (r) {
                successList.appendChild(createReviewCard(r, true));
            });
        } else {
            successSection.classList.add("hidden");
        }

        showScreen(screenResults);
        window.scrollTo(0, 0);
    }

    function createReviewCard(result, isCorrect) {
        var card = document.createElement("div");
        card.className = "review-card " + (isCorrect ? "correct" : "incorrect");

        var qDiv = document.createElement("div");
        qDiv.className = "review-card-question";
        qDiv.textContent = result.question.question;

        var aDiv = document.createElement("div");
        aDiv.className = "review-card-answer";
        aDiv.textContent = result.question.answer;

        card.appendChild(qDiv);
        card.appendChild(aDiv);

        if (!isCorrect && result.userAnswer) {
            var uDiv = document.createElement("div");
            uDiv.className = "review-card-yours";
            uDiv.textContent = "Votre réponse : " + result.userAnswer;
            card.appendChild(uDiv);
        }

        return card;
    }

    // === Event Listeners ===

    btnStart.addEventListener("click", function () {
        startQuiz(null);
    });

    btnValidate.addEventListener("click", function () {
        showCorrection();
    });

    // Allow Enter key to validate (Shift+Enter for new line)
    answerInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            showCorrection();
        }
    });

    btnCorrect.addEventListener("click", function () {
        handleEval(true);
    });

    btnIncorrect.addEventListener("click", function () {
        handleEval(false);
    });

    btnRetryErrors.addEventListener("click", function () {
        var errorQuestions = results
            .filter(function (r) { return !r.correct; })
            .map(function (r) { return r.question; });
        startQuiz(errorQuestions);
    });

    btnRestart.addEventListener("click", function () {
        startQuiz(null);
    });

    btnHome.addEventListener("click", function () {
        showScreen(screenHome);
    });

    // Keyboard shortcuts for self-evaluation
    document.addEventListener("keydown", function (e) {
        if (correctionZone.classList.contains("hidden")) return;

        if (e.key === "ArrowRight" || e.key === "o" || e.key === "O") {
            handleEval(true);
        } else if (e.key === "ArrowLeft" || e.key === "n" || e.key === "N") {
            handleEval(false);
        }
    });

})();
