// 1. Click on the main button -> show the modal
//  a. Get the MainButton element
//  b. Get the Modal element
//  c. Attach click event on MainButton -> which will open the modal (using display:none)
// 2. Click on the cross button -> close the modal
//  a. Get the cross button
//  b. Attach the click event on the cross button -> which will close the modal (removing display: none)

const ModalButton = document.querySelector('.jsModalButton')
const ModalOverlay = document.querySelector('.jsModalOverlay')
const ModalClose = ModalOverlay.querySelector('.jsModalClose')
const Modal = ModalOverlay.querySelector('.modal')

ModalButton.addEventListener('click', () => {
  ModalOverlay.classList.add('open-modal')
})

ModalClose.addEventListener('click', () => {
  ModalOverlay.classList.remove('open-modal')
})

ModalOverlay.addEventListener('click', e => {
  if (!e.target.closest('.modal')) {
    ModalOverlay.classList.remove('open-modal')
  }
})

// TODO: Do not use stopPropagation
// Modal.addEventListener('click', e => {
//   e.stopPropagation()
// })
