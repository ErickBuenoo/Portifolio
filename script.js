
// ── PHOTO ──
const pimg = document.getElementById('pimg');
const pph = document.getElementById('pph');

function showPhoto(src) {
    pimg.src = src;
    pimg.style.display = 'block';
    pph.style.display = 'none';
}

document.getElementById('photoInput').addEventListener('change', e => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = ev => showPhoto(ev.target.result);
    r.readAsDataURL(f);
});

// Try to auto-load uploaded file
(async () => {
    if (!window.fs) return;
    const names = ['photo.jpg', 'photo.jpeg', 'photo.png', 'image.jpg', 'image.jpeg', 'image.png', 'img.jpg', 'img.png', 'upload.jpg', 'foto.jpg'];
    for (const n of names) {
        try {
            const d = await window.fs.readFile(n);
            const blob = new Blob([d], { type: n.endsWith('.png') ? 'image/png' : 'image/jpeg' });
            showPhoto(URL.createObjectURL(blob));
            return;
        } catch (e) { }
    }
})();

// ── SCROLL ANIMATIONS ──
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.09 });
document.querySelectorAll('.ap').forEach(el => obs.observe(el));