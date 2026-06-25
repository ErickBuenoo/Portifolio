// ── FOTO: tenta carregar do sistema de arquivos ──
(async () => {
    const img = document.getElementById('profilePhoto');
    if (!window.fs) return;
    const candidates = [
        'photo.jpg', 'photo.jpeg', 'photo.png', 'photo.webp',
        'image.jpg', 'image.jpeg', 'image.png', 'image.webp',
        'foto.jpg', 'foto.jpeg', 'foto.png',
        'img.jpg', 'img.jpeg', 'img.png',
        'erick.jpg', 'erick.jpeg', 'erick.png',
        'profile.jpg', 'profile.jpeg', 'profile.png'
    ];
    for (const name of candidates) {
        try {
            const data = await window.fs.readFile(name);
            const ext = name.split('.').pop();
            const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
            const url = URL.createObjectURL(new Blob([data], { type: mime }));
            img.src = url;
            img.style.display = 'block';
            return;
        } catch (_) { }
    }
    // Se não encontrar arquivo, exibe iniciais como fallback
    const frame = img.parentElement;
    img.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.style.cssText = `
    position:absolute;inset:4px;border-radius:50%;z-index:2;
    background:linear-gradient(160deg,#1a1232,#0c0c22);
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;
  `;
    fallback.innerHTML = `
    <span style="font-size:5.5rem;font-weight:900;line-height:1;background:linear-gradient(135deg,#A78BFA,#38BDF8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">EB</span>
  `;
    frame.appendChild(fallback);
})();

// ── SCROLL ANIMATIONS ──
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.09 });
document.querySelectorAll('.ap').forEach(el => obs.observe(el));