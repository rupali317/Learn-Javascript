// Practice adding, removing, checking for classes and toggling classes with Element.classList
const addClassElement = document.querySelector('.add')
addClassElement.classList.add('red')

const removeClassElement = document.querySelector('.remove')
removeClassElement.classList.remove('remove')

const noBlueClassElement = document.querySelector('.contains1')
console.log(noBlueClassElement.classList.contains('blue'))

const blueClassElement = document.querySelector('.contains2')
console.log(blueClassElement.classList.contains('blue'))

const toggleClassElement = document.querySelector('.toggle')
toggleClassElement.classList.toggle('red')
