function selectGateway(selectedElement) {
    document.querySelectorAll('.gateway').forEach(element => element.classList.remove('selected'));
    selectedElement.classList.add('selected');
}

function showPaymentOptions() {
    let selectedGateway = document.querySelector('.gateway.selected');
    if (selectedGateway) {
        document.getElementById("payment-dialog").classList.remove("hidden");
    } else {
        alert("لطفاً یک درگاه پرداخت را انتخاب کنید.");
    }
}

function showPaymentResult(success) {
    document.getElementById("payment-dialog").classList.add("hidden");

    // حذف بخش پرداخت در صورت وجود
    let daserElement = document.querySelector('.daser');
    if (daserElement) {
        daserElement.remove();
    }

    // نمایش پیام پرداخت
    let paymentMessage = document.getElementById("payment-message");
    paymentMessage.classList.remove("hidden");

    // تنظیم پیام و آیکون بر اساس وضعیت پرداخت
    if (success) {
        paymentMessage.classList.add("success");
        paymentMessage.classList.remove("failed");
        document.getElementById("payment-status").innerText = "پرداخت شما با موفقیت انجام شد ✅";
        document.getElementById("payment-icon").src = "img/adress icon/tick-square.png";
        document.getElementById("tracking-code").innerText = "کد رهگیری سفارش شما: " + generateTrackingCode();
    } else {
        paymentMessage.classList.add("failed");
        paymentMessage.classList.remove("success");
        document.getElementById("payment-status").innerText = "پرداخت شما ناموفق بود ❌";
        document.getElementById("payment-icon").src = "img/adress icon/info-circle.png";
        document.getElementById("tracking-code").innerText = "متأسفیم! پرداخت شما انجام نشد. لطفاً دوباره تلاش کنید.";
    }

    // افزودن انیمیشن ظاهر شدن
    setTimeout(() => {
        paymentMessage.style.opacity = "1";
        paymentMessage.style.transform = "translateY(0)";
    }, 10);
}

function generateTrackingCode() {
    return Math.floor(100000000 + Math.random() * 900000000);
}

function trackOrder() {
    alert("پیگیری سفارش هنوز فعال نشده است.");
}