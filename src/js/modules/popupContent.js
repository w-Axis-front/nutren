export default function popupContent() {
    const trigger = document.getElementById("js_popup-trigger");
    const btnPopupClose = document.getElementById("js_close-popup");
    const popup = document.querySelector(".popup");

    if (trigger !== undefined && trigger !== null && popup !== undefined && popup !== null) {
        trigger.addEventListener("click", (event) => {
            if (!popup.classList.contains("active")) {
                popup.classList.add("active");
            }
        });
    }
    if (btnPopupClose !== undefined && btnPopupClose !== null && popup !== undefined && popup !== null) {
        btnPopupClose.addEventListener("click", (event) => {
            popup.classList.remove("active");
        });
    }
}