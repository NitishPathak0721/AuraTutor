class QuizController {
  constructor(appState) {
    this.state = appState;
    this.container = document.getElementById("quiz-container");
    this.badge = document.getElementById("quiz-difficulty-badge");
    this.questionText = document.getElementById("quiz-question-text");
    this.optionsList = document.getElementById("quiz-options-list");
    this.feedbackBox = document.getElementById("quiz-feedback-box");
    this.feedbackTitle = document.getElementById("quiz-feedback-title");
    this.feedbackText = document.getElementById("quiz-feedback-text");
    this.submitBtn = document.getElementById("btn-submit-quiz");

    // Dynamic actions container (for Try Again / Proceed buttons)
    this.actionArea = document.createElement("div");
    this.actionArea.style.marginTop = "12px";
    this.actionArea.style.display = "flex";
    this.actionArea.style.gap = "10px";
    this.actionArea.style.justifyContent = "flex-end";
    this.feedbackBox.appendChild(this.actionArea);

    this.selectedOptionIndex = null;
    this.currentQuizData = null;
    this.isSubmitted = false;

    this.init();
  }

  init() {
    this.submitBtn.addEventListener("click", () => this.submitAnswer());
  }

  loadQuiz(quizData) {
    this.currentQuizData = quizData;
    this.selectedOptionIndex = null;
    this.isSubmitted = false;

    this.feedbackBox.classList.add("hidden");
    this.actionArea.innerHTML = "";
    this.submitBtn.disabled = true;
    this.submitBtn.style.display = "block";
    this.submitBtn.innerText = "Submit Answer";

    const badgeText = {
      comprehensive: "🟢 Comprehensive Question (Foundational)",
      balanced: "🔵 Balanced Question (Standard)",
      accelerated: "🟣 Accelerated Question (Advanced)"
    };
    this.badge.innerText = badgeText[this.state.pace];
    this.badge.style.color = `var(--accent-${this.state.pace === 'comprehensive' ? 'teal' : this.state.pace === 'balanced' ? 'blue' : 'purple'})`;
    this.badge.style.backgroundColor = `var(--accent-${this.state.pace === 'comprehensive' ? 'teal' : this.state.pace === 'balanced' ? 'blue' : 'purple'}-glow)`;

    this.questionText.innerText = quizData.question;
    this.optionsList.innerHTML = "";
    quizData.options.forEach((option, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span>${option}</span>`;
      btn.addEventListener("click", () => this.selectOption(idx));
      this.optionsList.appendChild(btn);
    });
  }

  selectOption(index) {
    if (this.isSubmitted) return;

    this.selectedOptionIndex = index;
    this.submitBtn.disabled = false;

    const options = this.optionsList.querySelectorAll(".option-btn");
    options.forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    });
  }

  submitAnswer() {
    if (this.isSubmitted || this.selectedOptionIndex === null) return;
    this.isSubmitted = true;
    this.submitBtn.style.display = "none"; // Hide standard submit button

    const correctIndex = this.currentQuizData.answer;
    const isCorrect = this.selectedOptionIndex === correctIndex;
    const options = this.optionsList.querySelectorAll(".option-btn");

    options.forEach((btn, idx) => {
      btn.classList.remove("selected");
      if (idx === correctIndex) {
        btn.classList.add("correct");
      } else if (idx === this.selectedOptionIndex) {
        btn.classList.add("incorrect");
      }
    });

    this.feedbackBox.classList.remove("hidden");
    this.actionArea.innerHTML = ""; // Reset dynamic buttons

    if (isCorrect) {
      this.feedbackTitle.innerText = "✨ Correct Answer!";
      this.feedbackTitle.className = "quiz-feedback-title feedback-correct";
      this.feedbackText.innerText = this.currentQuizData.explanation;

      // Add "Proceed to Next Lesson" button if not on last chapter
      const course = COURSES[this.state.currentCourseId];
      if (this.state.currentChapterIdx < course.chapters.length - 1) {
        const nextBtn = document.createElement("button");
        nextBtn.className = "btn-submit";
        nextBtn.innerText = "Next Lesson →";
        nextBtn.addEventListener("click", () => {
          this.state.navigateToChapter(this.state.currentCourseId, this.state.currentChapterIdx + 1);
        });
        this.actionArea.appendChild(nextBtn);
      } else {
        const doneText = document.createElement("span");
        doneText.style.fontSize = "12px";
        doneText.style.fontWeight = "bold";
        doneText.style.color = "var(--accent-teal)";
        doneText.innerText = "🎉 Course Completed!";
        this.actionArea.appendChild(doneText);
      }

      this.state.handleQuizResult(true);
    } else {
      this.feedbackTitle.innerText = "❌ Incorrect";
      this.feedbackTitle.className = "quiz-feedback-title feedback-incorrect";
      this.feedbackText.innerText = `You selected: "${this.currentQuizData.options[this.selectedOptionIndex]}".\n\n${this.currentQuizData.explanation}`;

      // Add "Try Again" button to allow retrying
      const retryBtn = document.createElement("button");
      retryBtn.className = "btn-close";
      retryBtn.style.padding = "8px 16px";
      retryBtn.innerText = "🔄 Try Again";
      retryBtn.addEventListener("click", () => {
        this.loadQuiz(this.currentQuizData);
      });
      this.actionArea.appendChild(retryBtn);

      this.state.handleQuizResult(false);
    }
  }
}