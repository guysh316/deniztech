// تابعی برای اعمال فیلترهای انتخاب‌شده توسط کاربر
function applyFilters() {
    // دریافت مقدار فیلترهای انتخاب‌شده از فرم
    const category = document.getElementById('category').value;
    const brand = document.getElementById('brand').value;
    const condition = document.getElementById('condition').value;
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;
    const fastShipping = document.getElementById('fast-shipping').checked;
    const discounted = document.getElementById('discounted').checked;
    const warranty = document.getElementById('warranty').checked;

    // ایجاد رشته‌ای برای نمایش فیلترهای اعمال‌شده
    let filters = `فیلترها اعمال شدند:
    دسته‌بندی: ${category}
    برند: ${brand}
    وضعیت: ${condition}
    حداقل قیمت: ${minPrice}
    حداکثر قیمت: ${maxPrice}`;

    // بررسی گزینه‌های انتخابی و اضافه کردن آنها به پیام نمایش داده‌شده
    if (fastShipping) filters += "\nارسال سریع: ✅";
    if (discounted) filters += "\nتخفیف‌دار: ✅";
    if (warranty) filters += "\nگارانتی دار: ✅";

    // نمایش فیلترهای انتخاب‌شده به کاربر
    alert(filters);
}

// تابعی برای به‌روزرسانی نمایش قیمت هنگام تغییر مقدار ورودی قیمت
function updatePriceValue(value) {
    let priceFormatted = new Intl.NumberFormat('fa-IR').format(value) + " تومان";
    document.getElementById("price-value").innerText = priceFormatted;
}

// رویداد برای اجرا شدن کد هنگام بارگذاری کامل صفحه
document.addEventListener("DOMContentLoaded", function () {
    // دریافت دکمه باز کردن و بستن فیلترها و بخش فیلتر
    const filterToggle = document.querySelector(".filter-toggle");
    const filterSection = document.querySelector(".filter-section");
    const closeFilter = document.querySelector(".close-filter");

    // باز کردن بخش فیلترها هنگام کلیک روی دکمه نمایش فیلترها
    filterToggle.addEventListener("click", function () {
        filterSection.classList.add("active");
    });

    // بستن بخش فیلترها هنگام کلیک روی دکمه بستن
    closeFilter.addEventListener("click", function () {
        filterSection.classList.remove("active");
    });
});
