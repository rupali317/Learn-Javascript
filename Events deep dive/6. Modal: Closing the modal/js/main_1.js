/* Contains the implementation where user clicks on the
buttons as well as on the overlay
*/
const jsModalButton = document.querySelector('.jsModalButton')
const jsModalOverlay = document.querySelector('.jsModalOverlay')
const jsModalClose = jsModalOverlay.querySelector('.jsModalClose')

jsModalButton.addEventListener('click', ManageVisibilityModal)

jsModalClose.addEventListener('click', ManageVisibilityModal)

function ManageVisibilityModal() {
  jsModalOverlay.classList.toggle('open-mode')
}
