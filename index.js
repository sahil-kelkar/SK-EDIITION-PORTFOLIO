// 1. Smooth Scrolling with Offset for Sticky Header
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 2. Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 80) {
        nav.style.padding = '15px 8%';
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = 'rgba(13, 13, 13, 0.9)';
        nav.style.boxShadow = 'none';
    }
});

// 3. Category Modal Open Function
window.openCategory = function(category) {
    const modal = document.getElementById('videoModal');
    const title = document.getElementById('modalTitle');
    const allVideos = document.querySelectorAll('.cat-video');

    if (!modal) return;

    // Set Dynamic Title
    title.innerText = category.toUpperCase() + " EDITS";

    // Pehle saari videos hide karein
    allVideos.forEach(v => {
        v.style.display = 'none';
    });

    // Sirf clicked category ko show karein
    const activeVideos = document.querySelectorAll('.cat-video.' + category);
    activeVideos.forEach(v => {
        v.style.display = 'block';
    });

    // Modal display karein
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

// 4. Category Modal Close Function
window.closeCategory = function() {
    const modal = document.getElementById('videoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling back
    }
};

// 5. Close Modal on Backdrop Click
window.addEventListener('click', function(e) {
    const modal = document.getElementById('videoModal');
    if (modal && e.target === modal) {
        closeCategory();
    }
});