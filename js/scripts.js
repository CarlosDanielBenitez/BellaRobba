//menu hamburguesa
const menuIcon = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('.menu-dropdown');

menuIcon.addEventListener('click', () => {
  menuDropdown.classList.toggle('open');
});

// camitas reversibles
document.addEventListener('DOMContentLoaded', function() {
    const bedCards = document.querySelectorAll('.bedCard');
  
    bedCards.forEach(card => {
      const imgElements = card.querySelectorAll('img');
      const button = card.querySelector('button');
      let showingIndex = 0;
  
      button.addEventListener('click', () => {
        imgElements[showingIndex].classList.toggle('hidden');
        showingIndex = (showingIndex + 1) % imgElements.length;
        imgElements[showingIndex].classList.toggle('hidden');
      });
    });
  });
  