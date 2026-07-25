class AppState {
  constructor() {
    this.currentCourseId = "hindi";
    this.currentChapterIdx = 0;
    this.pace = "balanced";
    this.completedChapters = {};
    this.paceHistory = ["balanced"];
    this.focusScore = 90;
    this.correctStreak = 0;

    this.quizController = null;
    this.chatbotController = null;
    this.analyticsController = null;
  }

  setControllers(quiz, chatbot, analytics) {
    this.quizController = quiz;
    this.chatbotController = chatbot;
    this.analyticsController = analytics;
  }

  addFocusPoints(pts) {
    this.focusScore = Math.min(100, this.focusScore + pts);
    if (this.analyticsController) {
      this.analyticsController.render();
    }
  }

  navigateToChapter(courseId, chapIdx) {
    this.currentCourseId = courseId;
    this.currentChapterIdx = chapIdx;
    this.addFocusPoints(2);

    document.getElementById("tab-tutor-btn").click();
    window.app.renderCourse();
  }

  handleQuizResult(isCorrect) {
    const key = `${this.currentCourseId}_${this.currentChapterIdx}`;
    let paceChanged = false;
    let oldPace = this.pace;

    if (isCorrect) {
      this.completedChapters[key] = true;
      this.correctStreak++;
      this.addFocusPoints(8);

      if (this.correctStreak >= 2) {
        if (this.pace === "comprehensive") {
          this.pace = "balanced";
          paceChanged = true;
        } else if (this.pace === "balanced") {
          this.pace = "accelerated";
          paceChanged = true;
        }
        this.correctStreak = 0;
      }
    } else {
      this.correctStreak = 0;
      this.focusScore = Math.max(50, this.focusScore - 5);

      if (this.pace === "accelerated") {
        this.pace = "balanced";
        paceChanged = true;
      } else if (this.pace === "balanced") {
        this.pace = "comprehensive";
        paceChanged = true;
      }
    }

    this.paceHistory.push(this.pace);
    window.app.updatePaceUI();
    
    if (this.analyticsController) {
      this.analyticsController.render();
    }

    if (paceChanged) {
      this.chatbotController.addMessage(
        `🚨 *Pacing Update*: Recognizing your performance, I've adjusted my tutoring pace from **${oldPace.toUpperCase()}** to **${this.pace.toUpperCase()}**. Let me know if this works!`,
        "tutor"
      );
      this.chatbotController.addMessage(`Current streak reset to 0. Get the next 2 correct to speed back up!`, "tutor");
      this.chatbotController.updateStatusText();
      this.chatbotController.updateSuggestions();
    }
  }

  updatePaceManual(newPace) {
    if (this.pace === newPace) return;
    
    const oldPace = this.pace;
    this.pace = newPace;
    this.correctStreak = 0;
    this.paceHistory.push(this.pace);

    window.app.updatePaceUI();
    window.app.renderCourse();

    if (this.analyticsController) {
      this.analyticsController.render();
    }

    this.chatbotController.addMessage(
      `⚙️ *Manual Override*: You changed your learning speed from **${oldPace.toUpperCase()}** to **${this.pace.toUpperCase()}**. I'm resetting the adaptive logic to match your preference.`,
      "tutor"
    );
    this.chatbotController.updateStatusText();
    this.chatbotController.updateSuggestions();
  }
}

class AppCoordinator {
  constructor() {
    this.state = new AppState();
    this.speechUtterance = null;
    this.isSpeaking = false;
    this.initDOM();
  }

  initDOM() {
    this.courseSelectorList = document.getElementById("course-selector-list");
    this.courseTitleEl = document.getElementById("current-course-title");
    
    this.chapNumEl = document.getElementById("lesson-chapter-num");
    this.titleEl = document.getElementById("lesson-title");
    this.bodyEl = document.getElementById("lesson-body");
    this.analogyEl = document.getElementById("lesson-analogy");
    this.takeawayEl = document.getElementById("lesson-takeaway");
    
    this.btnPrev = document.getElementById("btn-prev-chapter");
    this.btnNext = document.getElementById("btn-next-chapter");
    this.indicator = document.getElementById("chapter-page-indicator");

    this.ttsBtn = document.getElementById("tts-btn");
    this.ttsIcon = document.getElementById("tts-icon");

    this.modalOverlay = document.getElementById("pace-modal");
    this.paceTrigger = document.getElementById("pace-trigger-badge");
    this.modalClose = document.getElementById("btn-close-modal");
    this.modalOptions = document.querySelectorAll(".modal-option");

    this.setupEvents();
    
    const quizCtrl = new QuizController(this.state);
    const chatbotCtrl = new ChatbotController(this.state);
    const analyticsCtrl = new AnalyticsController(this.state);
    
    this.state.setControllers(quizCtrl, chatbotCtrl, analyticsCtrl);
    
    this.renderCourseSelectors();
    this.renderCourse();
  }

  setupEvents() {
    this.ttsBtn.addEventListener("click", () => this.toggleSpeech());
    this.btnPrev.addEventListener("click", () => this.navigateSlide(-1));
    this.btnNext.addEventListener("click", () => this.navigateSlide(1));
    this.paceTrigger.addEventListener("click", () => this.showModal());
    this.modalClose.addEventListener("click", () => this.hideModal());
    
    this.modalOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        const selectedPace = opt.getAttribute("data-pace");
        this.state.updatePaceManual(selectedPace);
        this.modalOptions.forEach(o => o.classList.remove("active"));
        opt.classList.add("active");
      });
    });

    const tabButtons = document.querySelectorAll(".tab-btn");
    const viewTutor = document.getElementById("view-tutor");
    const viewAnalytics = document.getElementById("view-analytics");

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const target = btn.getAttribute("data-tab");
        if (target === "tutor") {
          viewTutor.classList.remove("hidden");
          viewAnalytics.classList.add("hidden");
        } else {
          viewTutor.classList.add("hidden");
          viewAnalytics.classList.remove("hidden");
          this.state.analyticsController.render();
        }
      });
    });
  }

  showModal() {
    this.modalOptions.forEach(opt => {
      if (opt.getAttribute("data-pace") === this.state.pace) {
        opt.classList.add("active");
      } else {
        opt.classList.remove("active");
      }
    });
    this.modalOverlay.classList.remove("hidden");
  }

  hideModal() {
    this.modalOverlay.classList.add("hidden");
  }

  renderCourseSelectors() {
    this.courseSelectorList.innerHTML = "";
    Object.values(COURSES).forEach(course => {
      const btn = document.createElement("button");
      btn.className = `course-btn ${course.id === this.state.currentCourseId ? 'active' : ''}`;
      btn.innerHTML = `<span class="course-icon">${course.icon}</span> ${course.title}`;
      
      btn.addEventListener("click", () => {
        this.courseSelectorList.querySelectorAll(".course-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        this.state.currentCourseId = course.id;
        this.state.currentChapterIdx = 0;
        this.renderCourse();
        this.state.chatbotController.resetChat();
      });

      this.courseSelectorList.appendChild(btn);
    });
  }

  renderCourse() {
    const course = COURSES[this.state.currentCourseId];
    const chapter = course.chapters[this.state.currentChapterIdx];
    const content = chapter.paceContent[this.state.pace];

    this.stopSpeech();

    this.courseSelectorList.querySelectorAll(".course-btn").forEach(btn => {
      const isCurrent = btn.innerHTML.includes(course.title);
      if (isCurrent) btn.classList.add("active");
      else btn.classList.remove("active");
    });

    this.courseTitleEl.innerText = `${course.title} — ${chapter.title}`;
    this.chapNumEl.innerText = `Chapter ${this.state.currentChapterIdx + 1} of ${course.chapters.length}`;
    this.titleEl.innerText = content.title;
    
    // Safe HTML and code block parsing
    let rawText = content.text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const parts = rawText.split(/(```[\s\S]*?```)/g);
    const processed = parts.map(part => {
      if (part.startsWith("```")) {
        if (part.startsWith("```python")) {
          const code = part.substring(9, part.length - 3).trim();
          return `<pre><code class="language-python">${code}</code></pre>`;
        } else {
          const code = part.substring(3, part.length - 3).trim();
          return `<pre><code>${code}</code></pre>`;
        }
      } else {
        const text = part.replace(/`([^`]+)`/g, '<code>$1</code>');
        return text.replace(/\n/g, "<br>");
      }
    });

    this.bodyEl.innerHTML = processed.join("");
    this.analogyEl.innerText = content.analogy;
    this.takeawayEl.innerText = content.keyTakeaway;

    this.btnPrev.disabled = this.state.currentChapterIdx === 0;
    this.btnNext.disabled = this.state.currentChapterIdx === course.chapters.length - 1;
    this.indicator.innerText = `${this.state.currentChapterIdx + 1} / ${course.chapters.length}`;

    this.state.quizController.loadQuiz(chapter.quiz[this.state.pace]);
    this.updatePaceUI();
  }

  updatePaceUI() {
    const paceTrigger = document.getElementById("pace-trigger-badge");
    const paceLabel = document.getElementById("current-pace-label");
    
    paceTrigger.className = `pace-badge-container pace-${this.state.pace}`;
    paceLabel.innerText = this.state.pace.charAt(0).toUpperCase() + this.state.pace.slice(1);
  }

  navigateSlide(direction) {
    const nextIdx = this.state.currentChapterIdx + direction;
    const course = COURSES[this.state.currentCourseId];
    if (nextIdx >= 0 && nextIdx < course.chapters.length) {
      this.state.currentChapterIdx = nextIdx;
      this.renderCourse();
    }
  }

  toggleSpeech() {
    if (this.isSpeaking) {
      this.stopSpeech();
    } else {
      this.startSpeech();
    }
  }

  startSpeech() {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    const titleText = this.titleEl.innerText;
    const bodyRawText = this.bodyEl.innerText;
    const analogyText = this.analogyEl.innerText;
    const textToSpeak = `${titleText}. ${bodyRawText}. ${analogyText}`;

    window.speechSynthesis.cancel();

    this.speechUtterance = new SpeechSynthesisUtterance(textToSpeak);
    this.speechUtterance.onend = () => this.stopSpeech();
    this.speechUtterance.onerror = () => this.stopSpeech();

    this.isSpeaking = true;
    this.ttsIcon.innerText = "⏹️";
    this.ttsBtn.classList.add("speaking");

    window.speechSynthesis.speak(this.speechUtterance);
  }

  stopSpeech() {
    if (this.isSpeaking) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      this.ttsIcon.innerText = "🔊";
      this.ttsBtn.classList.remove("speaking");
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.app = new AppCoordinator();
});