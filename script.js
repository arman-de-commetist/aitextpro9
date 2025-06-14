document.addEventListener('DOMContentLoaded', () => {
  const tryButton = document.querySelector('.btn');

  tryButton.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#start');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    console.log("Кнопка 'Попробовать сейчас' нажата!");
  });
});
