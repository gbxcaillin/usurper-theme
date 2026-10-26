(function(){
  function reveal(){
    var els = document.querySelectorAll('.u-rev:not(.on)');
    if (!('IntersectionObserver' in window)) { els.forEach(function(e){ e.classList.add('on'); }); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function(e){ io.observe(e); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', reveal); else reveal();
  document.addEventListener('shopify:section:load', reveal);
})();
