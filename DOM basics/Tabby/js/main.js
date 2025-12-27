// 1. Capture selected data by default via data-theme
// 2. Attach event listeners to button -> "tab". In the handler we add "is-selected" to the new one
// and remove from the previous selected one and assign the current one

let theme
let selectedTab
let selectedIndex
const tabs = Array.from(document.querySelector('.tabs').children)
const tabContents = Array.from(document.querySelector('.tab-contents').children)
tabs.forEach((tab, index) => {
  if (tab.classList.contains('is-selected')) {
    theme = tab.dataset.theme
    selectedTab = tab
    selectedIndex = index
  }
  tab.addEventListener('click', () => {
    tab.classList.add('is-selected')
    tabContents[index].classList.add('is-selected')
    tabContents[selectedIndex].classList.remove('is-selected')
    selectedTab.classList.remove('is-selected')
    selectedTab = tab
    selectedIndex = index
  })
})
