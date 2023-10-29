const allLink = document.querySelectorAll('a');

allLink.forEach((element) => {
  element.addEventListener('click', removeNavegacao) 
})

function removeNavegacao(event) {
  event.preventDefault();
}