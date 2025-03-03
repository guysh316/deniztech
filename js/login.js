document.addEventListener("DOMContentLoaded", function () {
    const otpInputs = document.querySelectorAll(".otp-box");
    const phoneInput = document.getElementById("phone-number");
    const errorMessage = document.getElementById("error-message");
    const otpSection = document.getElementById("otp-section");

    // تنظیم جهت تایپ از چپ به راست
    otpInputs.forEach(input => input.style.direction = "ltr");

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.inputType !== "deleteContentBackward" && input.value.length === 1) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                if (input.value === "") {
                    if (index > 0) {
                        otpInputs[index - 1].focus();
                        otpInputs[index - 1].value = ""; // حذف مقدار قبلی هنگام بازگشت
                    }
                } else {
                    input.value = "";
                }
                e.preventDefault();
            }
        });
    });
});

function validatePhoneNumber() {
    let phoneInputValue = document.getElementById("phone-number").value;
    let errorMessage = document.getElementById("error-message");
    let otpSection = document.getElementById("otp-section");

    let iranOperators = [/^09[1-9]\d{8}$/];
    let isValid = iranOperators.some(regex => regex.test(phoneInputValue));

    if (isValid) {
        errorMessage.textContent = "";
        otpSection.style.display = "block";
    } else {
        errorMessage.textContent = "شماره معتبر نیست یا در شبکه موجود نمی‌باشد!";
        otpSection.style.display = "none";
    }
}
