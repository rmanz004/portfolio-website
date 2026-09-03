// YouTube thumbnail backgrounds
document.querySelectorAll('.project-card').forEach(card => {
    const btn = card.querySelector('a.project-button[href*="youtube.com/watch"]');
    if (!btn) return;

    let videoId;
    try {
        videoId = new URL(btn.href).searchParams.get('v');
    } catch (e) { return; }
    if (!videoId) return;

    const gradient = 'linear-gradient(to bottom, rgba(244,241,235,0.05) 0%, rgba(244,241,235,0.82) 45%, rgba(244,241,235,1) 68%)';
    const maxRes = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const hqDef  = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const img = new Image();
    img.onload = () => {
        const src = (img.naturalWidth === 120 && img.naturalHeight === 90) ? hqDef : maxRes;
        card.classList.add('has-thumb');
        card.style.backgroundImage = `${gradient}, url('${src}')`;
    };
    img.onerror = () => {
        card.classList.add('has-thumb');
        card.style.backgroundImage = `${gradient}, url('${hqDef}')`;
    };
    img.src = maxRes;
});

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }

    });

}, {
    threshold: 0.15
});

fadeElements.forEach((element) => {
    observer.observe(element);
});