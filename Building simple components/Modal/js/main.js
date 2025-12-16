const jsModalButton = document.querySelector('.jsModalButton')
const jsModalOverlay = document.querySelector('.jsModalOverlay')
const jsModalClose = document.querySelector('.jsModalClose')
jsModalButton.addEventListener('click', () => {
  jsModalOverlay.classList.add('open-mode')
})
jsModalClose.addEventListener('click', () => {
  jsModalOverlay.classList.remove('open-mode')
})
