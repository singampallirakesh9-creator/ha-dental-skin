// HA Dental & Skin Corner

document.addEventListener("DOMContentLoaded", function () {
    console.log("HA Dental & Skin Corner Loaded");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.05)";
            btn.style.transition = "0.3s";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });
});
