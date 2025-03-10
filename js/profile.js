document.addEventListener("DOMContentLoaded", function () {
    // تعریف دکمه‌ها
    const buttons = {
        dashboard: document.getElementById("dashboard-btn"),
        profile: document.getElementById("profile-btn"),
        moneybag: document.getElementById("moneybag-btn"),
        buy: document.getElementById("buy-btn"),
        messages: document.getElementById("message-btn"), 
        settings: document.getElementById("setting-btn") 
    };

    // تعریف سکشن‌ها
    const sections = {
        dashboard: document.getElementById("dashboard-section"),
        profile: document.getElementById("profile-section"),
        moneybag: document.getElementById("moneybag-section"),
        buy: document.getElementById("buy-section"),
        messages: document.getElementById("message-section"), 
        settings: document.getElementById("setting-section") 
    };

    // تابع نمایش سکشن
    function showSection(selectedSection) {
        for (let key in sections) {
            if (sections[key]) {
                sections[key].style.display = (key === selectedSection) ? "block" : "none";
            }
            if (buttons[key]) {
                buttons[key].classList.toggle("active", key === selectedSection);
            }
        }
    }

    // اتصال رویداد کلیک (فقط به دکمه‌هایی که پیدا شده‌اند)
    for (let key in buttons) {
        if (buttons[key]) {
            buttons[key].addEventListener("click", () => showSection(key));
        }
    }

    // نمایش پیش‌فرض
    showSection("dashboard");
});






//                      قسمت مودال اطلاعات شخصی                   //


// گرفتن دکمه ویرایش
const editButton = document.querySelector('.edit-btn');

// وقتی روی دکمه کلیک شد، مودال باز بشه
editButton.addEventListener('click', () => {
    openModal();
    loadProfileDataIntoModal(); // اگه اطلاعات ذخیره شده داریم، پر کن
});

function openModal() {
    document.getElementById('editModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

// تابع برای بارگیری اطلاعات ذخیره‌شده در مودال و فرم اصلی
function loadProfileDataIntoModal() {
    const savedData = JSON.parse(localStorage.getItem('profileData'));

    if (savedData) {
        document.getElementById('fullNameInput').value = savedData.fullName || '';
        document.getElementById('emailInput').value = savedData.email || '';
        document.getElementById('phoneInput').value = savedData.phone || '';
        document.getElementById('passwordInput').value = savedData.password || '';
        document.getElementById('nationalCodeInput').value = savedData.nationalCode || '';
        document.getElementById('birthdateInput').value = savedData.birthdate || '';
        document.getElementById('postalCodeInput').value = savedData.postalCode || '';
        document.getElementById('addressInput').value = savedData.address || '';
    }
}

// تابع برای ذخیره اطلاعات و نمایش آنها در فرم اصلی
function saveProfile() {
    const profileData = {
        fullName: document.getElementById('fullNameInput').value,
        email: document.getElementById('emailInput').value,
        phone: document.getElementById('phoneInput').value,
        password: document.getElementById('passwordInput').value,
        nationalCode: document.getElementById('nationalCodeInput').value,
        birthdate: document.getElementById('birthdateInput').value,
        postalCode: document.getElementById('postalCodeInput').value,
        address: document.getElementById('addressInput').value
    };

    // ذخیره در localStorage
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // نمایش داده‌ها در فرم اصلی
    updateProfileForm();

    // بستن مودال
    closeModal();
}

// تابع برای نمایش داده‌ها در فرم اصلی
function updateProfileForm() {
    const savedData = JSON.parse(localStorage.getItem('profileData'));

    if (savedData) {
        document.querySelector('.info h3').textContent = savedData.fullName || 'نام ثبت نشده';
        document.querySelector('.info p').textContent = savedData.email || 'ایمیل ثبت نشده';

        document.querySelectorAll('.form-container .form-group input')[0].value = savedData.fullName || '';
        document.querySelectorAll('.form-container .form-group input')[1].value = savedData.email || '';
        document.querySelectorAll('.form-container .form-group input')[2].value = savedData.phone || '';
        document.querySelectorAll('.form-container .form-group input')[3].value = savedData.password || '';
        document.querySelectorAll('.form-container .form-group input')[4].value = savedData.nationalCode || '';
        document.querySelectorAll('.form-container .form-group input')[5].value = savedData.birthdate || '';
        document.querySelectorAll('.form-container .form-group input')[6].value = savedData.postalCode || '';
        document.querySelectorAll('.form-container .form-group input')[7].value = savedData.address || '';
    }
}

// هنگام بارگذاری صفحه اطلاعات از localStorage دریافت شود
document.addEventListener('DOMContentLoaded', updateProfileForm);
