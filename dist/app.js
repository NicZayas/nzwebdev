// for the smooth scroll
const scroll = new SmoothScroll('a[href*="#"]');

// bringing in the labels and turning them in to a node list
const labels = document.querySelectorAll('#grab_me')

// slicing each letter and putting it into an array and making it a string again
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

// bringing in the content cards
const cards = document.querySelectorAll('.card')

//creating an event listener
window.addEventListener('scroll', checkBoxes)

// running the function
checkBoxes()

//defining the function
function checkBoxes() {
   const triggerBottom = window.innerHeight / 5 * 4

   cards.forEach(card => {
       const cardTop = card.getBoundingClientRect().top

       if(cardTop < triggerBottom) {
        card.classList.add('show')
       }    else {
           card.classList.remove('show')
       }
   })
}