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
        background:#FFFFFF;border:1px solid #D3D0C6;
        display:flex;align-items:center;justify-content:center;
        `;
        fallback.innerHTML = `<span style="font-size:5.5rem;font-weight:900;line-height:1;color:#191A1E;font-family:Georgia,serif;">EB</span>`;
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
