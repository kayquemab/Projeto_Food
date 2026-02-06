$(document).ready(function () {

    /* ================================
       MENU MOBILE
    ================================= */
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });


    /* ================================
       NAVBAR ACTIVE + SCROLL
    ================================= */
    const sections = $('section');
    const navItems = $('.nav-item');

    let isScrolling = false;

    function setActiveSection() {

        if (isScrolling) return;

        const header = $('header');
        const headerHeight = header.outerHeight();
        const scrollPosition = $(window).scrollTop();

        /* Header shadow */
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '0px 2px 8px rgba(0,0,0,0.15)');
        }

        /* Detecta seção atual */
        let currentSectionId = "home";

        sections.each(function () {
            const sectionTop = $(this).offset().top - headerHeight - 20;

            if (scrollPosition >= sectionTop) {
                currentSectionId = $(this).attr("id");
            }
        });

        /* Atualiza menu ativo */
        navItems.removeClass("active");

        $(".nav-item a[href='#" + currentSectionId + "']")
            .parent()
            .addClass("active");
    }

    /* Scroll detecta seção */
    $(window).on("scroll", setActiveSection);


    /* ================================
       CLIQUE SUAVE NATURAL
    ================================= */
    $(".nav-item a").on("click", function (e) {
        e.preventDefault();

        isScrolling = true;

        const targetId = $(this).attr("href");
        const headerHeight = $('header').outerHeight();

        $("html, body").animate({
            scrollTop: $(targetId).offset().top - headerHeight + 5
        }, 600, function () {

            isScrolling = false;
            setActiveSection();
        });

        /* Fecha menu mobile */
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn').find('i').removeClass('fa-x');
    });


    /* ================================
       ANIMAÇÕES PREMIUM (ScrollReveal)
    ================================= */

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 1200,
        distance: '50px',
        delay: 200
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 1200,
        distance: '60px',
        delay: 300
    });

    /* Pratos com efeito em sequência */
    ScrollReveal().reveal('.dish', {
        origin: 'bottom',
        duration: 900,
        distance: '40px',
        interval: 200
    });

    /* Chef aparece suave */
    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '50px',
        delay: 200
    });

    /* Feedbacks em sequência */
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 900,
        distance: '40px',
        interval: 200
    });

});
