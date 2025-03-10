document.addEventListener("DOMContentLoaded", function() {
    const mainImages = document.querySelectorAll('.slider img');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const imagesCount = mainImages.length;

    function showSlide(index) {
        mainImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        thumbnails.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        prevButton.style.display = index === 0 ? 'none' : 'block';
        nextButton.style.display = index === imagesCount - 1 ? 'none' : 'block';
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    window.changeSlide = function(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex >= imagesCount) {
            currentIndex = imagesCount - 1;
        }
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    // Handling color options
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Handling tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', function() {
            const tooltipText = document.createElement('div');
            tooltipText.className = 'tooltip';
            tooltipText.innerText = tooltip.getAttribute('data-tooltip');
            document.body.appendChild(tooltipText);

            const rect = tooltip.getBoundingClientRect();
            tooltipText.style.top = rect.top - tooltipText.offsetHeight - 5 + 'px';
            tooltipText.style.left = rect.left + (tooltip.offsetWidth / 2) - (tooltipText.offsetWidth / 2) + 'px';
            tooltip.tooltipElement = tooltipText;
        });

        tooltip.addEventListener('mouseout', function() {
            if (tooltip.tooltipElement) {
                document.body.removeChild(tooltip.tooltipElement);
                tooltip.tooltipElement = null;
            }
        });
    });
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default open tab
document.getElementsByClassName('tablinks')[0].click();

var specialSwiper = new Swiper(".specialSwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Get the modal
var modal = document.getElementById("reviewModal");

// Get the button that opens the modal
var btn = document.querySelector(".write-review button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form validation
document.getElementById("reviewForm").onsubmit = function(event) {
    var isValid = true;

    // Clear previous error messages
    document.getElementById("titleError").textContent = "";
    document.getElementById("positiveError").textContent = "";
    document.getElementById("negativeError").textContent = "";
    document.getElementById("reviewTextError").textContent = "";

    // Validate review title
    var reviewTitle = document.getElementById("reviewTitle").value;
    if (reviewTitle.length < 3) {
        document.getElementById("titleError").textContent = "کارکتر کمتر از 3 تا است";
        isValid = false;
    }

    // Validate positive points
    var positivePoints = document.getElementById("positivePoints").value;
    if (positivePoints.length < 3) {
        document.getElementById("positiveError").textContent = "کارکتر کمتر از 3 تا است";
        isValid = false;
    }

    // Validate negative points
    var negativePoints = document.getElementById("negativePoints").value;
    if (negativePoints.length < 3) {
        document.getElementById("negativeError").textContent = "کارکتر کمتر از 3 تا است";
        isValid = false;
    }

    // Validate review text
    var reviewText = document.getElementById("reviewText").value;
    if (reviewText.length < 3) {
        document.getElementById("reviewTextError").textContent = "کارکتر کمتر از 3 تا است";
        isValid = false;
    }

    // If any validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("askQuestionModal");
    var btn = document.getElementById("askQuestionBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});