class ChatbotController {
  constructor(appState) {
    this.state = appState;
    this.messagesContainer = document.getElementById("chat-messages-container");
    this.suggestionsContainer = document.getElementById("chat-suggestions-container");
    this.inputField = document.getElementById("chat-input-field");
    this.sendBtn = document.getElementById("chat-send-btn");
    this.statusText = document.getElementById("chat-status-text");

    this.init();
  }

  init() {
    this.sendBtn.addEventListener("click", () => this.handleSendMessage());
    this.inputField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.handleSendMessage();
      }
    });

    this.resetChat();
  }

  resetChat() {
    this.messagesContainer.innerHTML = "";
    const welcomeMsgs = {
      comprehensive: "Hello! I am your Aura AI Tutor. I'm here to support you at a comfortable, step-by-step pace. Ask me any question, and I'll explain it simply with nice analogies! 😊",
      balanced: "Hello! I'm your Aura AI Tutor. Ready to cover some concepts? Ask me any questions about the current syllabus and we'll dive in. 📚",
      accelerated: "Aura AI Tutor online. Pacing optimized for high-density information transfer. Post your queries regarding low-level execution, mathematics, or complexity analysis. ⚙️"
    };

    this.addMessage(welcomeMsgs[this.state.pace], "tutor");
    this.updateSuggestions();
    this.updateStatusText();
  }

  updateStatusText() {
    const paceTitles = {
      comprehensive: "Adapting: Comprehensive Mode (Detailed)",
      balanced: "Adapting: Balanced Mode (Normal)",
      accelerated: "Adapting: Accelerated Mode (Concise)"
    };
    this.statusText.innerText = paceTitles[this.state.pace];
  }

  addMessage(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;
    
    // Safe HTML and code block parsing
    let rawText = text
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
        const textPart = part.replace(/`([^`]+)`/g, '<code>$1</code>');
        return textPart.replace(/\n/g, "<br>");
      }
    });

    bubble.innerHTML = processed.join("");
    this.messagesContainer.appendChild(bubble);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  handleSendMessage(customText = null) {
    const text = customText || this.inputField.value.trim();
    if (!text) return;

    if (!customText) {
      this.inputField.value = "";
    }

    this.addMessage(text, "student");
    this.state.addFocusPoints(5);

    const thinkingBubble = document.createElement("div");
    thinkingBubble.className = "chat-bubble tutor";
    thinkingBubble.innerHTML = "<span class='typing-dots'>Thinking...</span>";
    this.messagesContainer.appendChild(thinkingBubble);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

    setTimeout(() => {
      thinkingBubble.remove();

      const response = getChatbotResponse(
        this.state.currentCourseIdx,
        this.state.currentChapterIdx,
        this.state.pace,
        text
      );

      this.addMessage(response.text, "tutor");
      
      if (response.suggestedFollowUp) {
        this.updateSuggestions([response.suggestedFollowUp]);
      } else {
        this.updateSuggestions();
      }
    }, 800);
  }

  updateSuggestions(overrideList = null) {
    this.suggestionsContainer.innerHTML = "";
    
    let list = [];
    if (overrideList) {
      list = overrideList;
    } else {
      const defaultSuggestions = {
        comprehensive: [
          "Explain this with a simple analogy",
          "Can you show a super simple code sample?",
          "What does this actually mean in real life?"
        ],
        balanced: [
          "Explain the key concepts here",
          "Show a standard coding example",
          "Can you summarize this chapter?"
        ],
        accelerated: [
          "Explain the memory and asymptotic complexity",
          "Show an optimized example",
          "Detail the mathematical formulations"
        ]
      };
      list = defaultSuggestions[this.state.pace];
    }

    list.forEach(suggestion => {
      const btn = document.createElement("button");
      btn.className = "suggestion-btn";
      btn.innerText = suggestion;
      btn.addEventListener("click", () => {
        this.handleSendMessage(suggestion);
      });
      this.suggestionsContainer.appendChild(btn);
    });
  }
}