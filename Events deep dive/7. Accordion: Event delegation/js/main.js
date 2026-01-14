const accordion = document.querySelector('.accordion-container')

accordion.addEventListener('click', e => {
  if (!e.target.closest('.accordion__content')) {
    e.target.closest('.accordion').classList.toggle('is-open')
  }
})
