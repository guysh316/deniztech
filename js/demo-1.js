document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slider = document.querySelector(".main-top-slider");

    let currentIndex = 0;
    let interval;
    const slideDuration = 6000; // 6 ثانیه قبل از تغییر اسلاید
    const transitionSpeed = 1500; // 1.5 ثانیه برای افکت تغییر

    let touchStartX = 0;
    let touchEndX = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, slideDuration);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    nextButton.addEventListener("click", function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener("click", function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    // رویدادهای لمسی برای سوایپ
    slider.addEventListener("touchstart", function (e) {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener("touchmove", function (e) {
        touchEndX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", function () {
        let touchDiff = touchStartX - touchEndX;
        if (touchDiff > 50) {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        } else if (touchDiff < -50) {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        }
    });

    showSlide(currentIndex);
    startAutoSlide();
});


/* ============================= */
/*    SPECIAL PRODUCTS SLIDER    */
/* ============================= */


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.specialSwiper', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // تنظیم تایمر
    var countdownDuration = 2 * 24 * 60 * 60 * 1000; // 2 روز

    function resetEndTime() {
        var newEndTime = Date.now() + countdownDuration;
        localStorage.setItem('endTime', newEndTime);
        return newEndTime;
    }

    var endTime = localStorage.getItem('endTime');
    if (!endTime || Number(endTime) < Date.now()) {
        endTime = resetEndTime();
    } else {
        endTime = Number(endTime);
    }

    function updateTimer() {
        var now = Date.now();
        var distance = endTime - now;

        if (distance < 0) {
            endTime = resetEndTime();
            distance = countdownDuration;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // بررسی اینکه عناصر در صفحه وجود دارند
        var daysElem = document.getElementById("days");
        var hoursElem = document.getElementById("hours");
        var minutesElem = document.getElementById("minutes");
        var secondsElem = document.getElementById("seconds");

        if (daysElem && hoursElem && minutesElem && secondsElem) {
            daysElem.innerText = String(days).padStart(2, '0');
            hoursElem.innerText = String(hours).padStart(2, '0');
            minutesElem.innerText = String(minutes).padStart(2, '0');
            secondsElem.innerText = String(seconds).padStart(2, '0');
        }
    }

    var timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
});

/* ============================= */
/*      اسلاید لوازم جانبی      */
/* ============================= */


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


/* ============================= */
/*     اسلاید برند های محبوب    */
/* ============================= */


var brandsSwiper = new Swiper(".brandsSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,  // غیرفعال کردن لوپ
    autoplay: false,  // غیرفعال کردن اتوپلی
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});


/* ============================= */
/*      قسمت سوالات متدوال      */
/* ============================= */


function toggleFaq(faqId) {
    var faqContent = document.getElementById(faqId);
    faqContent.style.display = (faqContent.style.display === "none" || faqContent.style.display === "") ? "block" : "none";
}

function toggleMore(element) {
    const hiddenContent = element.previousElementSibling;
    const arrow = element.querySelector('.arrow');

    if (hiddenContent.classList.contains('expanded')) {
        hiddenContent.style.maxHeight = '0';
        arrow.classList.remove('up');
        element.innerHTML = 'مشاهده بیشتر <img src="img/faq/down-arrow-5-svgrepo-com.svg" class="arrow" />';
    } else {
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
        arrow.classList.add('up');
        element.innerHTML = 'مشاهده کمتر <img src="img/faq/down-arrow-5-svgrepo-com.svg" class="arrow up" />';
    }

    hiddenContent.classList.toggle('expanded');
    document.querySelector('.faq').classList.toggle('expanded');
    element.classList.toggle('collapsed');
}

// Initialize display state for all elements
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.two .hidden-content').classList.remove('expanded');
    document.querySelector('.faq').classList.remove('expanded');
});