const tabs = document.querySelector('.tabs')
const tabList = tabs.querySelectorAll('.tab')
const tabContent = document.querySelector('.tab-contents')
const tabContentList = tabContent.querySelectorAll('.tab-content')

tabs.addEventListener('click', e => {
  tabList.forEach(t => t.classList.remove('is-selected'))
  tabContentList.forEach(tc => tc.classList.remove('is-selected'))
  e.target.closest('.tab').classList.add('is-selected')
  const dataTheme = e.target.getAttribute('data-theme')
  const selectedTabContent = tabContent.querySelector(
    '[data-theme=' + dataTheme + ']',
  )
  selectedTabContent.classList.add('is-selected')
})
