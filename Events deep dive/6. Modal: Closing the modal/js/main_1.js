/* Contains the implementation where user clicks on the
buttons as well as on the overlay
*/
const jsModalButton = document.querySelector('.jsModalButton')
const jsModalOverlay = document.querySelector('.jsModalOverlay')
const jsModalClose = jsModalOverlay.querySelector('.jsModalClose')

jsModalButton.addEventListener('click', ManageVisibilityModal)

jsModalClose.addEventListener('click', ManageVisibilityModal)

// when the overlay is clicked then we close otherwise if the pink modal is clicked then the modal should not be clicked
jsModalOverlay.addEventListener('click', e => {
  if (!e.target.matches('.modal')) {
    jsModalOverlay.classList.remove('open-mode')
  }
})

function ManageVisibilityModal() {
  jsModalOverlay.classList.toggle('open-mode')
}
