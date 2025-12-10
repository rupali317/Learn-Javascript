const button = document.querySelector('button')
button.addEventListener('click', function () {
  // if (button.classList.contains('is-clicked')) {
  //   button.classList.remove('is-clicked')
  // } else {
  //   button.classList.add('is-clicked')
  // }
  button.classList.toggle('is-clicked')
})
