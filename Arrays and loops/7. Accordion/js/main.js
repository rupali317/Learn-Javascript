const AccordionList = document.querySelectorAll('.accordion')

AccordionList.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.accordion__header')
  accordionHeader.addEventListener('click', () => {
    accordion.classList.toggle('is-open')
  })
})
