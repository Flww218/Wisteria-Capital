/* ================================================
   共享 JavaScript shared.js
   所有页面均引用此文件
   ================================================ */

/* ——— 移动端菜单开关 ——— */
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  const ham = document.getElementById('hamburger');
  if (!nav) return;
  nav.classList.toggle('open');
  ham.style.opacity = nav.classList.contains('open') ? '0.4' : '1';
}

/* ——— 滚动入场动画 ——— */
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));

  /* ——— 平滑滚动 ——— */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
});
