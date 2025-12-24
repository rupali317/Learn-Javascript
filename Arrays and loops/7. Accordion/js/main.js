const AccordionList = document.querySelectorAll('.accordion')

AccordionList.forEach(Accordion => {
  Accordion.addEventListener('click', () => {
    Accordion.classList.toggle('is-open')
  })
})
