const jsModalButton = document.querySelector('.jsModalButton')
const jsModalOverlay = document.querySelector('.jsModalOverlay')
const jsModalClose = jsModalOverlay.querySelector('.jsModalClose')
const modal = jsModalOverlay.querySelector('.modal')
const modalIcon = jsModalOverlay.querySelector('.wave-hand')

jsModalButton.addEventListener('click', () => {
  jsModalOverlay.classList.add('open-mode')
})

jsModalClose.addEventListener('click', manageVisibilityModalOverlay)
jsModalOverlay.addEventListener('click', manageVisibilityModalOverlay)

function manageVisibilityModalOverlay(e) {
  if (e.target !== modal && e.target !== modalIcon) {
    jsModalOverlay.classList.remove('open-mode')
  }
}
