class Paper {
  constructor() {
    this.holdingPaper = false;
    this.mouseTouchX = 0;
    this.mouseTouchY = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.prevMouseX = 0;
    this.prevMouseY = 0;
    this.velX = 0;
    this.velY = 0;
    this.rotation = Math.random() * 30 - 15;
    this.currentPaperX = 0;
    this.currentPaperY = 0;
    this.rotating = false;
  }

  init(paper) {
    paper.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.mouseTouchX = touch.clientX;
      this.mouseTouchY = touch.clientY;
      this.prevMouseX = touch.clientX;
      this.prevMouseY = touch.clientY;
      this.holdingPaper = true;
    });

    paper.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.holdingPaper) {
        const touch = e.touches[0];
        this.mouseX = touch.clientX;
        this.mouseY = touch.clientY;
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
        this.currentPaperX += this.velX;
        this.currentPaperY += this.velY;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
        paper.style.transform = translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg);
      }
    });

    paper.addEventListener('touchend', () => {
      this.holdingPaper = false;
    });
  }
}

const papers = document.querySelectorAll('.paper');
papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
