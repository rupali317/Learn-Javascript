// Using the data-theme method

const tabby = document.querySelector('.tabby')
const tabList = tabby.querySelectorAll('.tab')
const tabContentList = tabby.querySelectorAll('.tab-content')
tabList.forEach(tab =>
  tab.addEventListener('click', () => {
    let theme = tab.dataset.theme
    let tabContent = tabby.querySelector('#' + theme)
    tabList.forEach(t => t.classList.remove('is-selected'))
    tabContentList.forEach(tc => tc.classList.remove('is-selected'))
    tab.classList.add('is-selected')
    tabContent.classList.add('is-selected')
  }),
)
