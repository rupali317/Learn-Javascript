const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tab-content')

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    removeSelectionClassFromElements(tabs)
    removeSelectionClassFromElements(tabContents)
    tabs[index].classList.add('is-selected')
    tabContents[index].classList.add('is-selected')
  })
})

function removeSelectionClassFromElements(elements) {
  elements.forEach(element => {
    element.classList.remove('is-selected')
  })
}
