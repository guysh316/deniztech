document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slider = document.querySelector(".main-top-slider");
    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination");
    slider.appendChild(paginationContainer);

    let currentIndex = 0;
    let interval;
    const slideDuration = 5000; 
    const transitionSpeed = 1500;
    let touchStartX = 0;
    let touchEndX = 0;

    function updatePagination() {
        paginationContainer.innerHTML = "";
        slides.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (index === currentIndex) {
                dot.classList.add("active");
            }
            dot.addEventListener("click", () => goToSlide(index));
            paginationContainer.appendChild(dot);
        });
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        updatePagination();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
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
/*         دسته بندی            */
/* ============================= */

var swiper = new Swiper(".categorySwiper", {
    slidesPerView: 3,  // نمایش ۳ دسته در دسکتاپ
    spaceBetween: 10,
    loop: false, // جلوگیری از چرخش نامحدود
    freeMode: true, // امکان اسکرول دستی
    breakpoints: {
      320: { slidesPerView: 2 },  // موبایل
      768: { slidesPerView: 3 },  // تبلت
      1024: { slidesPerView: 5 }  // دسکتاپ
    }
  });


/* ============================= */
/*        swiper mahsol          */
/* ============================= */
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10 },
            370: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 6, spaceBetween: 15 }
        },
        on: {
            init: function () {
                updatePrevButtonVisibility(this);
            },
            slideChange: function () {
                updatePrevButtonVisibility(this);
            }
        }
    });

    function updatePrevButtonVisibility(swiper) {
        const prevButton = document.querySelector(".swiper-button-prev");
        if (swiper.isBeginning) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }
    }

    const products = [
        {img: "13T Pro - 256GB.jpeg", title: "شیائومی 13T Pro - 256GB", original: 35000000, discount: 10, rating: 4.8},
        {img: "s23.jpeg", title: "Galaxy S23 Ultra - 512GB", original: 52000000, discount: 15, rating: 4.9},
        {img: "iphone14.jpeg", title: "آیفون 14 Pro Max - 256GB", original: 65000000, discount: 12, rating: 4.7},
        {img: "Huawei Mate 50 Pro.jpeg", title: "هواوی P60 Pro - 512GB", original: 48000000, discount: 10, rating: 4.6},
        {img: "airpad iphone.jpeg", title: "هندزفری بلوتوثی ایرپادز پرو 2 اپل", original: 9000000, discount: 10, rating: 4.8},
        {img: "Galaxy Watch6 Classic.jpeg", title: "ساعت هوشمند سامسونگ", original: 11000000, discount: 8, rating: 4.7},
        {img: "powerbank xiaomi.jpeg", title: "پاوربانک شیائومی", original: 18000000, discount: 12, rating: 4.6},
        {img: "Galaxy Buds2 Pro.jpeg", title: "هندزفری بی‌سیم سامسونگ", original: 7000000, discount: 15, rating: 4.5},
        {img: "iphone 15.jpeg", title: "آیفون 15 - 128GB", original: 58000000, discount: 10, rating: 4.8}
    ];

    const productContainer = document.getElementById("product-slider");
    if (productContainer) {
        let productHTML = "";
        products.forEach(product => {
            const finalPrice = product.original * (1 - product.discount / 100);
            productHTML += `
                <div class="swiper-slide">
                    <div class="product-card">
                        <img src="img/first page/${product.img}" alt="${product.title}">
                        <div class="product-info">
                            <div class="product-title">${product.title}</div>
                            <div class="product-meta">
                                <span class="wishlist">
                                    <img src="img/profile icon/heart-alt-svgrepo-com.svg"/>
                                </span>
                                <span class="original-price">${product.original.toLocaleString()} تومان</span>
                                <span class="discount">${product.discount}%</span>
                            </div>
                            <div class="product-meta">
                                <span class="rating">⭐ ${product.rating}</span>
                                <span class="final-price">${finalPrice.toLocaleString()} تومان</span>
                            </div>
                            <a href="#" class="buy-btn">افزودن به سبد خرید</a>
                        </div>
                    </div>
                </div>`;
        });
        productContainer.insertAdjacentHTML("beforeend", productHTML);
    }
});



/* ============================= */
/*         swiper two           */
/* ============================= */

document.addEventListener("DOMContentLoaded", function () {
    const specialOfferContainer = document.querySelector(".special-offer .swiper-wrapper");
    if (!specialOfferContainer) return;

    var swiper = new Swiper(".special-offer .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: ".special-offer .swiper-button-next",
            prevEl: ".special-offer .swiper-button-prev"
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 10 },
            370: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 6, spaceBetween: 15 }
        }
    });

    const products = [
        { img: "airpad iphone.jpeg", title: "ایرپاد پرو 2 اپل", original: 9000000, discount: 10, rating: 4.8 },
        { img: "Apple Pencil 2_11zon.jpeg", title: "اپل پنسل 2", original: 5500000, discount: 5, rating: 4.7 },
        { img: "bi sim samsung.jpeg", title: "گوشی دو سیم‌کارت سامسونگ", original: 28000000, discount: 8, rating: 4.6 },
        { img: "cable sharzh.jpeg", title: "کابل شارژر", original: 350000, discount: 15, rating: 4.5 },
        { img: "samsung mohafez.jpeg", title: "محافظ قاب سامسونگ", original: 1200000, discount: 10, rating: 4.7 },
        { img: "Galaxy Watch6 Classic.jpeg", title: "ساعت هوشمند گلکسی واچ 6 کلاسیک", original: 12000000, discount: 10, rating: 4.8 },
        { img: "Galaxy S24 Ultra.jpeg", title: "سامسونگ گلکسی S24 Ultra - 512GB", original: 75000000, discount: 8, rating: 4.9 },
        { img: "Xiaomi Mi Band 8_11zon.jpeg", title: "دستبند هوشمند شیائومی Mi Band 8", original: 2000000, discount: 12, rating: 4.6 },
        { img: "SanDisk Extreme 1TB_11zon.jpeg", title: "هارد اکسترنال SanDisk Extreme 1TB", original: 4500000, discount: 10, rating: 4.7 }
      ];      

    let productHTML = "";
    products.forEach(product => {
        const finalPrice = product.original * (1 - product.discount / 100);
        productHTML += `
            <div class="swiper-slide">
                <div class="product-card">
                    <img src="img/first page/${product.img}" alt="${product.title}">
                    <div class="product-info">
                        <div class="product-title">${product.title}</div>
                        <div class="product-meta">
                            <span class="wishlist">
                                <img src="img/profile icon/heart-alt-svgrepo-com.svg"/>
                            </span>
                            <span class="original-price">${product.original.toLocaleString()} تومان</span>
                            <span class="discount">${product.discount}%</span>
                        </div>
                        <div class="product-meta">
                            <span class="rating">⭐ ${product.rating}</span>
                            <span class="final-price">${finalPrice.toLocaleString()} تومان</span>
                        </div>
                        <a href="#" class="buy-btn">افزودن به سبد خرید</a>
                    </div>
                </div>
            </div>`;
    });
    specialOfferContainer.insertAdjacentHTML("beforeend", productHTML);
});