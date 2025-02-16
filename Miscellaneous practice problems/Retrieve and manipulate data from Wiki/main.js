const submitButton = document.querySelector('button')
const input = document.querySelector('input')
const fetchedData = submitButton.addEventListener('click', getDataFromWiki)
const countText = document.querySelector('#js-count-occurence')

function getDataFromWiki() {
  const topic = input.value
  let count = 0
  const URL = `http://localhost:3000/wiki?topic=${topic}`
  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      const data =
        'This is how Singapore is. Singapore is beautiful. Singapore is spectacular'
      const topicRegex = `${topic}`
      const topicRegexStringIterator = data.matchAll(topicRegex)
      topicRegexStringIterator.forEach(_ => count++)
      countText.textContent = `Number of times ${topic} appeared = ${count}`
    })
    .catch(error => {
      console.log(`Error fetching: ${error}`)
    })
}
