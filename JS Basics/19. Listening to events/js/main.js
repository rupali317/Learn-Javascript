const button = document.querySelector('button')
button.addEventListener('click', function () {
  // console.log('button is clicked')
  /* const body = document.body
  if (body.classList.contains('is-clicked')) {
    body.classList.remove('is-clicked')
  } else {
    body.classList.add('is-clicked')
  } */
  document.body.classList.toggle('is-clicked')
})
