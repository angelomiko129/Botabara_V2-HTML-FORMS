const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach(dropdownToggle => {
    dropdownToggle.addEventListener("click", event => {
        event.preventDefault();
        const dropdownMenu = dropdownToggle.nextElementSibling;
        dropdownMenu.classList.toggle("open");
        dropdownToggle.classList.toggle("open");
    });
});