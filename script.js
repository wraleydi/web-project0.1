const tombolMenu = document.querySelector('.toggle-menu')
        const navBaru = document.querySelector('.navbar-new')

        tombolMenu.onclick = function () {
            navBaru.classList.toggle('is-active')
        }

        window.onscroll = function() {
    navBaru.classList.remove('is-active');
};

        function showContent(contentId) {
    document.getElementById("article-studi").classList.remove("hidden");
    var sections = document.querySelectorAll("#article-studi > section");
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === contentId) {
        sections[i].style.display = "block";
        } else {
        sections[i].style.display = "none";
        }
    }
}
