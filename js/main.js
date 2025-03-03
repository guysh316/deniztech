document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
    let interval;
    const slideDuration = 6000; // 6 ثانیه قبل از تغییر اسلاید
    const transitionSpeed = 1500; // 1.5 ثانیه برای افکت تغییر

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

    document.querySelector(".main-top-slider").addEventListener("mouseenter", stopAutoSlide);
    document.querySelector(".main-top-slider").addEventListener("mouseleave", startAutoSlide);

    showSlide(currentIndex);
    startAutoSlide();
});

/* ============================= */
/*    SPECIAL PRODUCTS SLIDER    */
/* ============================= */

document.addEventListener('DOMContentLoaded', function() {
    // راه‌اندازی Swiper برای پیشنهاد شگفت‌انگیز
    var swiper = new Swiper('.specialSwiper', {
        slidesPerView: 7,  // نمایش 5 اسلاید همزمان
        slidesPerGroup: 1, // حرکت تک به تک
        centeredSlides: false, // غیرفعال‌سازی اسلاید وسط‌چین
        spaceBetween: 10,  // کاهش فاصله بین آیتم‌ها
        loop: false,
        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
        },
        breakpoints: {
            320: { // موبایل کوچک
                slidesPerView: 1,
                spaceBetween: 10,
            },
            370:{
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: { // تبلت
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: { // دسکتاپ
                slidesPerView: 6,
                spaceBetween: 15,
            }
        }
    });

    // تایمر شمارش معکوس
    var countdownDuration = 2 * 24 * 60 * 60 * 1000; // ۲ روز

    function resetEndTime() {
        var newEndTime = Date.now() + countdownDuration;
        localStorage.setItem('endTime', newEndTime);
        return newEndTime;
    }

    var endTime = localStorage.getItem('endTime');
    if (!endTime || parseInt(endTime, 10) < Date.now()) {
        endTime = resetEndTime();
    } else {
        endTime = parseInt(endTime, 10);
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

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
    updateTimer();
});


/* ================================ */
/*  اسلاید جدیدترین و پرفروش ترین  */
/* ================================ */


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15, 
    loop: false, 
    centeredSlides: false,
    autoplay: true, 
    breakpoints: {
        320: { // موبایل کوچک
            slidesPerView: 1,
            spaceBetween: 10,
        },
        370:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: { // تبلت
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: { // دسکتاپ
            slidesPerView: 5,
            spaceBetween: 15,
        }
    }
});



