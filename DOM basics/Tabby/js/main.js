const tabby = document.querySelector('.tabby')
const tabs = tabby.querySelectorAll('.tab')
const tabContents = tabby.querySelectorAll('.tab-content')

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

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const theme = tab.dataset.theme
//     const tabContent = tabby.querySelector(
//       '.tab-contents [data-theme=' + theme + ']',
//     )
//     removeSelectionClassFromElements(tabs)
//     removeSelectionClassFromElements(tabContents)
//     tabContent.classList.add('is-selected')
//     tab.classList.add('is-selected')
//   })
// })
