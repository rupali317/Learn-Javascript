// Practice adding, removing, checking for classes and toggling classes with Element.classList
const div_One = document.querySelector('.add')
const div_Two = document.querySelector('.remove')
const div_Three = document.querySelector('.contains1')
const div_Four = document.querySelector('.contains2')
const div_Five = document.querySelector('.toggle')

div_One.classList.add('remove')
div_Two.classList.remove('remove')
console.log(div_Three.classList.contains('blue'))
console.log(div_Four.classList.contains('blue'))
// if (div_Five.classList.contains('red')) {
//   div_Five.classList.remove('red')
// } else {
//   div_Five.classList.add('red')
// }
div_Five.classList.toggle('red')
