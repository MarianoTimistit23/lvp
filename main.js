document.addEventListener('DOMContentLoaded', function() {
    /**
     * Navbar
     */
    window.onscroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector(".js-header")?.classList.add('active');
        } else {
            document.querySelector(".js-header")?.classList.remove('active');
        }
    };

    /**
     * Typed animation
     */
    let typing = new Typed(".js-typed-animation", {
        strings: ["", "your business operations.", "your digital security.", "your transaction capabilities.", "ideas into digital success."],
        typeSpeed: 30,
        backSpeed: 50,
        smartBackspace: false, 
        loop: false,
    });
    
    /**
     * Animate on scroll (Intersection Observer API)
     */
    const faders = document.querySelectorAll('.js-animation-fade-in, .js-animation-fade-in-container');

    const options = {
        threshold: .5
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Normal fade-in animation
                if (entry.target.classList.contains('js-animation-fade-in')) {
                    entry.target.classList.add('js-animation-visible');
                    appearOnScroll.unobserve(entry.target);
                }

                // Staggered fade-in animation for container and children
                if (entry.target.classList.contains('js-animation-fade-in-container')) {
                    entry.target.classList.add('js-animation-visible');
                    const children = entry.target.querySelectorAll('.js-animation-fade-in-children');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('js-animation-visible');
                        }, index * 200); // Adjust the delay as needed (200ms here)
                    });
                    appearOnScroll.unobserve(entry.target);
                }
            }
        });
    }, options);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    /**
     * Hamburger Menu Toggle
     */
    const hamburgerMenuToggle = document.querySelector('.header__hamburger-menu-container');
    const navMenu = document.querySelector('.header__nav-container-mobile ul');
    const body = document.querySelector('body');

    hamburgerMenuToggle?.addEventListener('click', () => {
        hamburgerMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Close menu and allow scroll on anchor link click
    const anchorLinks = navMenu.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll to the anchor element
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Close the menu
                hamburgerMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    });

    /**
     * Tabber
     */
    document.querySelectorAll('.tab-link').forEach(link => {
        link.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            document.querySelector(`#${tabId}`).classList.add('active');
            
            document.querySelectorAll('.tab-link').forEach(link => {
                link.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });

    // Set the first tab as active on page load
    document.querySelector('.tab-link').classList.add('active');
    document.querySelector('.tab-content').classList.add('active');

    /**
     * Contact Form
     */
    const form = document.getElementById('js-contact-form');
    var submitButton = document.querySelector('.form-submit-btn');
    const loader = document.querySelector('.js-loader');
    var successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitButton.disabled = true;
        loader.style.display = 'flex';

        setTimeout(function() {
            loader.style.display = 'none';
            form.style.display = 'none';
            successMessage.style.display = 'flex';
        }, 1500);
    });

});