document.getElementById('navbt').addEventListener('click', function() {
    var navList = document.getElementById('navbarSupportedContent');
    navList.classList.toggle('show');
});

        window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 100) { // Change 100 to the scroll position you desire
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});