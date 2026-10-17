// The North Watch family: sections rise in as you scroll to them. Everything rests visible; what is already on
// screen when the page opens stays still, and only sections still below the fold animate, once, on arrival.
(function () {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var seen = new WeakSet();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var first = !seen.has(e.target);
      seen.add(e.target);
      if (!e.isIntersecting) return;
      if (!first) e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px 8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();

// Visit counts: GoatCounter, no cookies and no personal data. One dashboard for every North Watch site, so each
// path carries its host (skyhand.thenorthwatch.eu/…). Links with data-goatcounter-click count as events: the
// download buttons. Only on the live domains, never in previews.
(function () {
  var CODE = '';  // the GoatCounter site code; empty = off
  if (!CODE || !/(^|\.)(thenorthwatch\.eu|rabbit-hole\.video)$/.test(location.hostname)) return;
  window.goatcounter = { path: function (p) { return location.host + p; } };
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
