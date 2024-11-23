/* METHOD 1: Loop and attach event listeners to each of the headers

const AccordionList = Array.from(document.querySelectorAll('.accordion'))

AccordionList.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.accordion__header')
  accordionHeader.addEventListener('click', () => {
    accordion.classList.toggle('is-open')
    })
}) */

// METHOD 2: Event delegation

const AccordionContainer = document.querySelector('.accordion-container')

AccordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')
  if (accordionHeader) {
    const accordion = accordionHeader.closest('.accordion')
    // const accordion = accordionHeader.parentElement
    accordion.classList.toggle('is-open')
  }
})
