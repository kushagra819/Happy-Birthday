let highestZ = 1;

class Paper {
  holdingPaper = false;
  touchStartX = 0;
  touchStartY = 0;
  touchMoveX = 0;
  touchMoveY = 0;
  rotation = 0;
  init(paper) {
    paper.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.holdingPaper = true;
      this.touchStartX = touch.clientX;
      this.touchStartY = touch.clientY;
    });

    paper.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.holdingPaper) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - this.touchStartX;
        const deltaY = touch.clientY - this.touchStartY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        this.rotation = angle;
        paper.style.transform = translate(${deltaX}px, ${deltaY}px) rotate(${this.rotation}deg);
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
