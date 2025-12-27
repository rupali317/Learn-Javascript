// 1. Capture selected data by default
// 2. Attach event listeners to button -> "tab". In the handler we add "is-selected" to the new one
// and remove from the previous selected one and assign the current one

let prevSelectedIndex
const tabs = Array.from(document.querySelector('.tabs').children)
const tabContents = Array.from(document.querySelector('.tab-contents').children)

tabs.forEach((tab, currIndex) => {
  if (tab.classList.contains('is-selected')) {
    prevSelectedIndex = currIndex
  }
  tab.addEventListener('click', () => {
    tab.classList.add('is-selected')
    tabs[prevSelectedIndex].classList.remove('is-selected')
    tabContents[currIndex].classList.add('is-selected')
    tabContents[prevSelectedIndex].classList.remove('is-selected')
    prevSelectedIndex = currIndex
  })
})
