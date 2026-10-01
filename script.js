// ── SCROLL ANIMATIONS ──
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.09 });
document.querySelectorAll('.ap').forEach(el => obs.observe(el));
