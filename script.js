

document.addEventListener("DOMContentLoaded", function () {

    let currentSlideIndex = 0;

    // Function to show the current slide
    function showSlides() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.owl-dot');
    
        // Check if slides and dots are not empty
        if (slides.length === 0 || dots.length === 0) {
            return;
        }
    
        // Hide all slides and dots
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));
    
        // Show the current slide and highlight the corresponding dot
        slides[currentSlideIndex].style.display = 'block';
        dots[currentSlideIndex].classList.add('active');
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= document.querySelectorAll('.slide').length) {
            currentSlideIndex = 0;
        }
        showSlides();
    }

    // Function to move to the previous slide
    function prevSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = document.querySelectorAll('.slide').length - 1;
        }
        showSlides();
    }

    // Function to navigate to a specific slide

    // function goToSlide(index) {
    //     currentSlideIndex = index;
    //     showSlides();
    // }

    // Attach click event listeners to next and previous buttons
    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

});

$(document).ready(function(){
    $('.slider').slick({
        // Add any additional options or settings here
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    });
});
   

   