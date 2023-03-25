let autoSlider = true;
let sliderInterval;
let timerInterval;
let counter;
let intervalTime = 5000;

$("#prev").click(function () {
    prevSlide();
    againInterval();
});

$("#next").click(function () {
    nextSlide();
    againInterval();
});


function prevSlide() {
    let activeSlide = $(".active");
    activeSlide.removeClass("active");
    if (activeSlide.prev().hasClass("slide")) {
        activeSlide.prev().addClass("active");
    } else {
        $(".slide").last().addClass("active");
    }
}

function nextSlide() {
    let activeSlide = $(".active");
    activeSlide.removeClass("active");
    if (activeSlide.next().hasClass("slide")) {
        activeSlide.next().addClass("active");
    } else {
        $(".slide").first().addClass("active");
    }
}

function againInterval() {
    if (autoSlider) {
        clearInterval(sliderInterval);
        clearInterval(timerInterval);
        counter = 1;
        $(".header h1 span").text(`(${counter})`);
        sliderInterval = setInterval(nextSlide, intervalTime);
        timerInterval = setInterval(timerDisplay, 1000);
    }
};

if (autoSlider) {
    againInterval();
}

function timerDisplay() {
    counter++;
    $(".header h1 span").text(`(${counter})`);
    if (counter > 5) againInterval();
}

//Zamanı başlığın yanında gösterin!