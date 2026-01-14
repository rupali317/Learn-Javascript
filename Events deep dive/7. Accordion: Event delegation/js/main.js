const accordionContainer = document.querySelector('.accordion-container')

accordionContainer.addEventListener('click', e => {
  if (!e.target.closest('.accordion__content')) {
    const accordion = e.target.closest('.accordion')
    accordion.classList.toggle('is-open')
  }
})
