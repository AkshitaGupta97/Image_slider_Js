 
const sliderItems = document.querySelectorAll('.slider-item');
const buttons = document.querySelectorAll('.btn');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        showSlide(i);
    })
}) 
prevButton.addEventListener('click', () => {
    // if current slider is at first item show last item
    if(currentSlide === 0) {
        showSlide(sliderItems.length - 1);
    }
    else {
        showSlide(currentSlide - 1);
    }
})

nextButton.addEventListener('click', () => {
    // if current slider is at last item show first item
   if(currentSlide === sliderItems.length -1){
        showSlide(0);
   }
   else{
        showSlide(currentSlide + 1);
   }
})
function showSlide(index) {
    // if there is a slide already active, remove the active class
    sliderItems.forEach(item => {
        item.classList.remove('active');
    })
    buttons.forEach(btn => {
        btn.classList.remove('active');
    })
    // update current slide to  index
    currentSlide = index;
    // add active class to the current slide and button
    sliderItems[currentSlide].classList.add('active');
    buttons[currentSlide].classList.add('active');
}

// auto slide functionality

setInterval(() => {
    const newSlide = (currentSlide + 1) % sliderItems.length; // let currentSl = 4, newSlide = (4 + 1) % 6 = 5, if 0 = (0+1)%6 = 1., if 6 = (6+1)%6 = 7%6 = 1.
    showSlide(newSlide)
}, 3000)

showSlide(currentSlide); // calling the function to show the first slide


