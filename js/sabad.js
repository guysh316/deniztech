document.addEventListener("DOMContentLoaded", function () {
    const discountAmount = 50000;  // مبلغ کد تخفیف
    const specialDiscount = 200000; // مبلغ تخفیف ویژه

    function updateCartSummary() {
        let totalProducts = 0;
        let totalPrice = 0;

        const items = document.querySelectorAll(".cart-items .item:not(.unavailable)");

        items.forEach(item => {
            const quantity = parseInt(item.querySelector(".quantity").textContent.trim()) || 1;

            // حذف کاراکترهای غیرعددی (کاما، تومان و ...)
            let priceText = item.querySelector(".price").textContent.replace(/[^\d]/g, "");
            const unitPrice = parseInt(priceText) || 0;

            const itemTotalPrice = unitPrice * quantity;

            totalProducts += quantity;
            totalPrice += itemTotalPrice;
        });

        // اطمینان از وجود عناصر نمایشگر
        const totalProductsEl = document.querySelector(".total-products");
        const totalPriceEl = document.querySelector(".total-price");
        const totalDiscountEl = document.querySelector(".total-discount");
        const discountAmountEl = document.querySelector(".discount-amount");
        const finalTotalEl = document.querySelector(".final-total");

        if (!totalProductsEl || !totalPriceEl || !totalDiscountEl || !discountAmountEl || !finalTotalEl) {
            console.warn("یکی از المان‌های خلاصه سبد پیدا نشد");
            return;
        }

        totalProductsEl.textContent = totalProducts;
        totalPriceEl.textContent = totalPrice.toLocaleString() + " تومان";
        totalDiscountEl.textContent = specialDiscount.toLocaleString() + " تومان";
        discountAmountEl.textContent = discountAmount.toLocaleString() + " تومان";

        const finalTotal = totalPrice - (discountAmount + specialDiscount);
        finalTotalEl.textContent = finalTotal.toLocaleString() + " تومان";
    }

    // ثبت رویدادهای افزایش، کاهش و حذف برای هر آیتم
    document.querySelectorAll(".cart-items .item:not(.unavailable)").forEach(item => {
        const minusBtn = item.querySelector(".negative");
        const plusBtn = item.querySelector(".edit");
        const deleteBtn = item.querySelector(".delete");
        const quantitySpan = item.querySelector(".quantity");

        minusBtn.addEventListener("click", function () {
            let quantity = parseInt(quantitySpan.textContent.trim()) || 1;
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            } else {
                item.remove();
            }
            updateCartSummary();
        });

        plusBtn.addEventListener("click", function () {
            let quantity = parseInt(quantitySpan.textContent.trim()) || 1;
            quantity++;
            quantitySpan.textContent = quantity;
            updateCartSummary();
        });

        deleteBtn.addEventListener("click", function () {
            item.remove();
            updateCartSummary();
        });
    });

    updateCartSummary();
});
