class AnalyticsController {
  constructor(appState) {
    this.state = appState;
    this.chartContainer = document.getElementById("pace-chart-container");
    this.mapContainer = document.getElementById("concept-map-container");

    this.focusScoreEl = document.getElementById("metric-focus-score");
    this.paceSpeedEl = document.getElementById("metric-pace-speed");
    this.conceptsCountEl = document.getElementById("metric-concepts-count");
  }

  render() {
    this.updateStats();
    this.renderPaceChart();
    this.renderConceptMap();
  }

  updateStats() {
    this.focusScoreEl.innerText = `${this.state.focusScore}%`;
    
    const historyCount = this.state.paceHistory.length;
    let speed = "Consistent";
    if (historyCount > 3) {
      const lastThree = this.state.paceHistory.slice(-3);
      const unique = new Set(lastThree).size;
      if (unique === 3) speed = "Dynamic";
      else if (unique === 2) speed = "Adaptive";
    }
    this.paceSpeedEl.innerText = speed;

    const totalConcepts = 8; // 4 courses * 2 chapters each = 8 total chapters
    const completedCount = Object.keys(this.state.completedChapters).length;
    this.conceptsCountEl.innerText = `${completedCount} / ${totalConcepts}`;
  }

  renderPaceChart() {
    const history = this.state.paceHistory;
    const padding = 40;
    const width = this.chartContainer.clientWidth || 400;
    const height = 240;
    
    const getY = (paceVal) => {
      if (paceVal === "comprehensive") return height - padding - 30;
      if (paceVal === "balanced") return height / 2;
      return padding + 20;
    };

    let points = "";
    let areaPoints = `0,${height - padding} `;

    const drawHistory = history.length > 0 ? history : ["balanced"];
    const stepX = drawHistory.length > 1 ? (width - padding * 2) / (drawHistory.length - 1) : width - padding * 2;

    const coordinateArray = drawHistory.map((pace, index) => {
      const x = padding + index * stepX;
      const y = getY(pace);
      return { x, y, pace };
    });

    coordinateArray.forEach((pt, i) => {
      points += `${pt.x},${pt.y} `;
      areaPoints += `${pt.x},${pt.y} `;
    });
    areaPoints += `${coordinateArray[coordinateArray.length - 1].x},${height - padding}`;

    let circles = coordinateArray.map((pt, i) => {
      const color = pt.pace === 'comprehensive' ? 'var(--accent-teal)' : pt.pace === 'balanced' ? 'var(--accent-blue)' : 'var(--accent-purple)';
      return `<circle cx="${pt.x}" cy="${pt.y}" r="6" class="chart-point" stroke="${color}" />`;
    }).join("");

    const svgContent = `
      <svg class="pace-chart-svg" width="100%" height="${height}" viewBox="0 0 ${width} ${height}">
        <defs>
          <linearGradient id="chart-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="var(--accent-teal)" />
            <stop offset="50%" stop-color="var(--accent-blue)" />
            <stop offset="100%" stop-color="var(--accent-purple)" />
          </linearGradient>
          <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--accent-purple)" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="var(--bg-primary)" stop-opacity="0.0"/>
          </linearGradient>
        </defs>

        <line x1="${padding}" y1="${getY('comprehensive')}" x2="${width - padding}" y2="${getY('comprehensive')}" class="grid-line" />
        <line x1="${padding}" y1="${getY('balanced')}" x2="${width - padding}" y2="${getY('balanced')}" class="grid-line" />
        <line x1="${padding}" y1="${getY('accelerated')}" x2="${width - padding}" y2="${getY('accelerated')}" class="grid-line" />

        <text x="${padding - 8}" y="${getY('comprehensive') + 4}" class="chart-axis-text" text-anchor="end">Slow</text>
        <text x="${padding - 8}" y="${getY('balanced') + 4}" class="chart-axis-text" text-anchor="end">Normal</text>
        <text x="${padding - 8}" y="${getY('accelerated') + 4}" class="chart-axis-text" text-anchor="end">Fast</text>

        ${coordinateArray.map((pt, i) => `
          <text x="${pt.x}" y="${height - 12}" class="chart-axis-text" text-anchor="middle">Q${i+1}</text>
        `).join("")}

        ${drawHistory.length > 1 ? `
          <polygon points="${areaPoints}" class="chart-area" />
          <path d="M ${points}" class="chart-line" />
        ` : ""}

        ${circles}
      </svg>
    `;

    this.chartContainer.innerHTML = svgContent;
  }

  renderConceptMap() {
    const width = this.mapContainer.clientWidth || 400;
    const height = 430;

    // Nodes updated to match the new curriculum (Hindi, English, CS, Social Science)
    const nodes = [
      // Hindi Course
      { id: "hi_1", title: "Devanagari Script", course: "hindi", chapterIdx: 0, x: 70, y: 50 },
      { id: "hi_2", title: "Word Order & Grammar", course: "hindi", chapterIdx: 1, x: 210, y: 50 },
      
      // English Course
      { id: "en_1", title: "Parts of Speech", course: "english", chapterIdx: 0, x: 70, y: 140 },
      { id: "en_2", title: "Tenses & Aspect", course: "english", chapterIdx: 1, x: 210, y: 140 },
      
      // Computer Science Course
      { id: "cs_1", title: "Algorithms Basics", course: "computer_science", chapterIdx: 0, x: 70, y: 230 },
      { id: "cs_2", title: "Data Structures", course: "computer_science", chapterIdx: 1, x: 210, y: 230 },
      
      // Social Science Course
      { id: "ss_1", title: "Ancient Cities", course: "social_science", chapterIdx: 0, x: 70, y: 320 },
      { id: "ss_2", title: "Democracy Models", course: "social_science", chapterIdx: 1, x: 210, y: 320 }
    ];

    const links = [
      { source: "hi_1", target: "hi_2" },
      { source: "en_1", target: "en_2" },
      { source: "cs_1", target: "cs_2" },
      { source: "ss_1", target: "ss_2" }
    ];

    const getNodeStatus = (node) => {
      const key = `${node.course}_${node.chapterIdx}`;
      if (this.state.completedChapters[key]) return "completed";
      
      if (this.state.currentCourseId === node.course && this.state.currentChapterIdx === node.chapterIdx) {
        return "unlocked";
      }
      
      if (node.chapterIdx === 0) return "unlocked";
      
      const prevKey = `${node.course}_${node.chapterIdx - 1}`;
      if (this.state.completedChapters[prevKey]) return "unlocked";
      
      return "locked";
    };

    const nodeStatusMap = {};
    nodes.forEach(n => {
      nodeStatusMap[n.id] = getNodeStatus(n);
    });

    const getLinkStatus = (link) => {
      const sourceStatus = nodeStatusMap[link.source];
      const targetStatus = nodeStatusMap[link.target];
      if (sourceStatus === "completed" && targetStatus === "completed") return "completed";
      if (sourceStatus === "completed" || sourceStatus === "unlocked") return "unlocked";
      return "locked";
    };

    const linkElements = links.map(link => {
      const sNode = nodes.find(n => n.id === link.source);
      const tNode = nodes.find(n => n.id === link.target);
      const status = getLinkStatus(link);
      return `<line x1="${sNode.x}" y1="${sNode.y}" x2="${tNode.x}" y2="${tNode.y}" class="concept-link link-${status}" />`;
    }).join("");

    const nodeElements = nodes.map(node => {
      const status = nodeStatusMap[node.id];
      const radius = status === "unlocked" ? 22 : 18;
      
      return `
        <g class="concept-node node-${status}" transform="translate(0,0)" data-course="${node.course}" data-chap="${node.chapterIdx}">
          <circle cx="${node.x}" cy="${node.y}" r="${radius}" />
          ${status === 'completed' ? `<text x="${node.x}" y="${node.y + 4}" font-size="12" text-anchor="middle" fill="#fff">✓</text>` : ""}
          <text x="${node.x}" y="${node.y + radius + 15}" font-size="11" font-weight="700" text-anchor="middle" class="node-label">
            ${node.title}
          </text>
        </g>
      `;
    }).join("");

    const svgContent = `
      <svg class="concept-map-svg" width="100%" height="${height}" viewBox="0 0 ${width} ${height}">
        ${linkElements}
        ${nodeElements}
      </svg>
    `;

    this.mapContainer.innerHTML = svgContent;

    const nodeGroups = this.mapContainer.querySelectorAll(".concept-node");
    nodeGroups.forEach(grp => {
      grp.addEventListener("click", () => {
        const course = grp.getAttribute("data-course");
        const chapIdx = parseInt(grp.getAttribute("data-chap"), 10);
        this.state.navigateToChapter(course, chapIdx);
      });
    });
  }
}