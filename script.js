

document.addEventListener('DOMContentLoaded', function() {
  const accordianItems = document.querySelectorAll('.accordian-item');
  accordianItems.forEach(item => {
    const answer = item.querySelector('.answer');
    answer.style.display = 'none'; // hide the answer by default

    const question = item.querySelector('.question');
    question.addEventListener('click', () => {
      answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
      const icon  = item.querySelector('.icon');
      if (answer.style.display === 'block') {
        icon.src="icon-minus.svg";
      } else {
        icon.src="icon-plus.svg";
      }
    });
  });
});




