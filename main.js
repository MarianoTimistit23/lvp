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
     * Animate on scroll (Intersection Observer API)
     */
    const faders = document.querySelectorAll('.js-animation-fade-in');

    const options = {
        threshold: 0.3
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('js-animation-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, options);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
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
});
