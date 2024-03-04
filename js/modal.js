document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var openModalBtn = document.querySelectorAll(".openModalBtn");
    var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.forEach(elem => {
    elem.addEventListener("click", function () {
        modal.style = `
            opacity: 1;
            z-index: 1;
        `
    });
})
  

    closeModalBtn.addEventListener("click", function () {
        modal.style = `
            opacity: 0;
            z-index: -1;
        `
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style = `
                opacity: 0;
                z-index: -1;
            `
        }
    });
});