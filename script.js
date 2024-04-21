let highestZ = 1;

class Paper {
  holdingPaper = false;
  touchStartX = 0;
  touchStartY = 0;
  init(paper) {
    paper.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.holdingPaper = true;
      this.touchStartX = touch.clientX - paper.getBoundingClientRect().left;
      this.touchStartY = touch.clientY - paper.getBoundingClientRect().top;
    });

    paper.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.holdingPaper) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - paper.getBoundingClientRect().left - this.touchStartX;
        const deltaY = touch.clientY - paper.getBoundingClientRect().top - this.touchStartY;
        paper.style.transform = translate(${deltaX}px, ${deltaY}px);
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
