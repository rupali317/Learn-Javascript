// METHOD: Event delegation
// Only on click of the tab the tab and tab-content will be updated

const tabby = document.querySelector('.tabby')
const tabs = tabby.querySelector('.tabs')
const tabList = Array.from(tabs.querySelectorAll('.tab'))
const tabContents = tabby.querySelector('.tab-contents')
const tabContentList = Array.from(tabContents.querySelectorAll('.tab-content'))

tabs.addEventListener('click', e => {
  removeClass(tabList)
  removeClass(tabContentList)
  const targetTab = e.target
  targetTab.classList.add('is-selected')
  const index = tabList.indexOf(targetTab)
  tabContentList[index].classList.add('is-selected')
})

function removeClass(elements) {
  elements.forEach(element => {
    element.classList.remove('is-selected')
  })
}
