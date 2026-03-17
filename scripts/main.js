(() => {
  const yearEl = document.createElement('small');
  yearEl.textContent = `© ${new Date().getFullYear()} SignalPulse`;
  yearEl.style.color = '#9ba7b4';

  const footer = document.querySelector('.footer-inner');
  if (footer) {
    footer.append(yearEl);
  }
})();
