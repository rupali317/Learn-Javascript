const AccordionList = Array.from(document.querySelectorAll('.accordion'))

AccordionList.forEach(Accordion => {
  const AccordionHeader = Accordion.querySelector('.accordion__header')
  AccordionHeader.addEventListener('click', () => {
    Accordion.classList.toggle('is-open')
  })
})
