/* Contains the implementation where user clicks only on the
buttons
*/
const jsModalButton = document.querySelector('.jsModalButton')
const jsModalOverlay = document.querySelector('.jsModalOverlay')
const jsModalClose = jsModalOverlay.querySelector('.jsModalClose')

jsModalButton.addEventListener('click', ManageVisibilityModal)

jsModalClose.addEventListener('click', ManageVisibilityModal)

function ManageVisibilityModal() {
  jsModalOverlay.classList.toggle('open-mode')
}
