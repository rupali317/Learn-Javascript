/* Contains the implementation where user clicks on the
buttons as well as on the overlay
*/
const jsModalButton = document.querySelector('.jsModalButton')
const jsModalOverlay = document.querySelector('.jsModalOverlay')
const jsModalClose = jsModalOverlay.querySelector('.jsModalClose')

jsModalButton.addEventListener('click', ManageVisibilityModal)

jsModalClose.addEventListener('click', ManageVisibilityModal)

// when the overlay is clicked then we close otherwise if the pink modal is clicked then the modal should not be clicked
// Method 1: not using e.stopPropagation()
jsModalOverlay.addEventListener('click', e => {
  if (!e.target.closest('.modal')) {
    jsModalOverlay.classList.remove('open-mode')
  }
})

// Method 2: e.stopPropagation()
/*jsModalOverlay.addEventListener('click', e => {
  if (e.target.closest('.modal')) {
    e.stopPropagation()
  } else {
    jsModalOverlay.classList.remove('open-mode')
  }
})*/

function ManageVisibilityModal() {
  jsModalOverlay.classList.toggle('open-mode')
}
