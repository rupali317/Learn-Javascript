const submitButton = document.querySelector('button')
const input = document.querySelector('input')
const URL = submitButton.addEventListener('click', getDataFromWiki)

function getDataFromWiki() {
  const topic = input.value
  const URL = `http://localhost:3000/wiki?topic=${topic}`
  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      console.log(`data received: ${data}`)
    })
    .catch(error => {
      console.log(`Error fetching: ${error}`)
    })
}
