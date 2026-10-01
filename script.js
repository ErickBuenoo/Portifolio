// ── FOTO: fallback com iniciais se a imagem falhar ──
(() => {
    const img = document.getElementById('profilePhoto');
    if (!img) return;
    const showFallback = () => {
        img.style.display = 'none';
        const frame = img.parentElement;
        if (frame.querySelector('.photo-fallback')) return;
        const fallback = document.createElement('div');
        fallback.className = 'photo-fallback';
        fallback.style.cssText = `
        position:absolute;inset:4px;border-radius:50%;z-index:2;
        background:linear-gradient(160deg,#1a1232,#0c0c22);
        display:flex;align-items:center;justify-content:center;
        `;
        fallback.innerHTML = `<span style="font-size:5.5rem;font-weight:900;line-height:1;background:linear-gradient(135deg,#A78BFA,#38BDF8);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">EB</span>`;
        frame.appendChild(fallback);
    };
    if (img.complete && img.naturalWidth === 0) showFallback();
    else img.addEventListener('error', showFallback);
})();

// ── SCROLL ANIMATIONS ──
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.09 });
document.querySelectorAll('.ap').forEach(el => obs.observe(el));
