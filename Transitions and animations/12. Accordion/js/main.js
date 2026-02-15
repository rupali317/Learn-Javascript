const accordionContainer = document.querySelector('.accordion-container')

// Method 1:  Check if clicked in the content (more resiliant to HTML change)
// accordionContainer.addEventListener('click', e => {
//   if (!e.target.closest('.accordion__content')) {
//     const accordion = e.target.closest('.accordion')
//     accordion.classList.toggle('is-open')
//   }
// })

// Method 2: Check if clicked in the header - Zell's approach (clear intent)
accordionContainer.addEventListener('click', e => {
  const accordionHeader = e.target.closest('.accordion__header')
  const accordion = accordionHeader.closest('.accordion')
  const accordionContent = accordionHeader.nextElementSibling
  if (accordionHeader) {
    // accordionHeader.parentElement.classList.toggle('is-open') // If the HTML structure changes parentElement will be a different element
    accordion.classList.toggle('is-open') // My tweak
    if (accordion.classList.contains('is-open')) {
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
    } else {
      accordionContent.style.height = '0px'
    }
  }
})
