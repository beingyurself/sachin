
$(document).ready(function() {
    
    const   navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle'),
            navClose = document.getElementById('nav-close'),
            navLink = document.getElementsByClassName('nav_link');
    
    // ============================== Nav Show ==============================
    if (navToggle) {
        $(navToggle).click(function(){
            $(navMenu).addClass("show-menu");
        });
    };
    // ============================== Menu Hide ==============================
    if (navClose) {
        $(navClose).click(function(){
            $(navMenu).removeClass("show-menu");
        });
    };
    // ============================== Menu Link ==============================
    if (navLink) {
        $(navLink).each((index, element) => {
            $(element).click(() => {
                $(navMenu).removeClass("show-menu");
            });
        })
    };
    // ============================== Accordian Skills ==============================
    const   skillsContent = document.getElementsByClassName('skills_content'),
            skillsHeader = document.getElementsByClassName('skills_header');
    const fun1 = (entity) => {
        const itemClass = $(entity).parent().attr('class');
        
        $(skillsContent).each( (index, element) => {
            $(element).removeClass().addClass('skills_content skills_close');
        });

        if (itemClass == 'skills_content skills_close') {
            $(entity).parent().removeClass().addClass('skills_content skills_open');
        }
    };
    $(skillsHeader).each((index, element) => {
        $(element).click(() => fun1(element));
    });

    // ============================== Qualification ==============================
    const   tabs = document.querySelectorAll('[data-target]'),
            tabContent = document.querySelectorAll('[data-content]');
    $(tabs).each( (index, element) => {
        $(element).click(() => {
            const target = document.querySelectorAll(element.dataset.target);

            $(tabContent).removeClass('qualification_active');
            $(target).addClass('qualification_active');

            $(element).each((index1, element1) => {
                $(element1).removeClass('qualification_active');
            });
            $(element).addClass('qualification_active');
        });
    });

    // ============================== Services Modal SHOW ==============================
    const   modalViews = document.getElementsByClassName('services_modal'),
            modalBtns = document.getElementsByClassName('services_button'),
            modalCloses = document.getElementsByClassName('services_modal-close'); 

    let fun2 = (i) => {
        $(modalViews).each((index, element) => {
            if (index == i) {
                $(element).addClass('active-modal');
            }
        });
    }
    $(modalBtns).each((index, element) => {
        $(element).click(() => {
            fun2(index);
        });
    });
    // ============================== Services Modal SHOW ==============================
    $(modalCloses).each((index, element) => {
        $(element).click(() => {
            $(modalViews).each((index1, element1) => {
                if (index == index1)
                    $(element1).removeClass('active-modal');
            });
        });
    });

    // ============================== Scroll sections Active Link ==============================
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        const scrollY = window.pageYOffset

        $(sections).each((index, element) => {

            const sectionHeight = element.offsetHeight;
            const sectionTop = element.offsetTop - 50;
            const sectionId = $(element).attr('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
                $(document).find('.nav_menu a[href*=' + sectionId + ']').addClass('active-link');
            else
                $(document).find('.nav_menu a[href*=' + sectionId + ']').removeClass('active-link');
        });
    };
    $(window).scroll(() => {
        scrollActive();
    });

    // ============================== Change Background header ==============================
    const scrollHandler = () => {
        const nav = document.getElementById('header');

        if (window.pageYOffset >= 80)
            $(nav).addClass('scroll-header');
        else
            $(nav).removeClass('scroll-header');
    }; 
    $(window).scroll(() => {
        scrollHandler();
    });
    // ============================== Show Scroll Up ==============================
    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');

        if (window.pageYOffset >= 560)
            $(scrollUp).addClass('show-scroll');
        else
            $(scrollUp).removeClass('show-scroll');
    }; 
    $(window).scroll(() => {
        scrollUp();
    }); 
   
    // ============================== Theme ==============================
    const   themeButton = document.getElementById('theme-button'),
            darkTheme = 'dark-theme', 
            iconTheme = 'uli-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme the interface has by validating the dark-theme cli
    const getCurrentTheme = $('body').hasClass(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = $(themeButton).hasClass(iconTheme) ? 'uli-moon' : 'uli-sun';

    if (selectedTheme) {
         if (selectedTheme === 'dark')
            $('body').addClass(darkTheme);
        else
            $('body').removeClass(darkTheme);
        
        if (selectedIcon === 'uli-moon')
            $(themeButton).addClass(iconTheme);
        else
            $(themeButton).removeClass(iconTheme);
    }

    // Activate/ Deactivate the theme manually with the button
    $(themeButton).click(() => {
        $('body').toggleClass(darkTheme);
        $(themeButton).toggleClass(iconTheme);

        localStorage.setItem('selected-theme', getCurrentTheme);
        localStorage.setItem('selected-icon', getCurrentIcon);
    });

    // Logo page Refresh
        $('.nav_logo').click(() => {
            window.location.reload
        });
});