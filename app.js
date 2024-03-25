let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');
let timeRunning = 3000;
let runTimeOut;

nextDom.onclick = function () {
    showSlider('next');
};

prevDom.onclick = function () {
    showSlider('prev');
};

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        document.querySelector('.carousel').classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        document.querySelector('.carousel').classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        document.querySelector('.carousel').classList.remove('next');
        document.querySelector('.carousel').classList.remove('prev');
    }, timeRunning);
}
document.addEventListener("DOMContentLoaded", function() {
    // Scroll to footer when "Info" link is clicked
    document.getElementById("info-link").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById("info-section").scrollIntoView({ behavior: "smooth" });
        
        // Display text in footer
        document.getElementById("info-content").textContent = "08606146 | @Uzl_Brl";
    });
});