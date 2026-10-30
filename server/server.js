(function () {
  var menu = document.getElementById('static-mobile-nav')
  var openBtn = document.querySelector('button[aria-label="Open menu"]')
  var closeBtn = document.getElementById('static-mobile-close')
  function close () { if (menu) { menu.hidden = true; menu.style.display = 'none' } }
  if (openBtn && menu) openBtn.addEventListener('click', function () { menu.hidden = false; menu.style.display = 'block' })
  if (closeBtn) closeBtn.addEventListener('click', close)
  if (menu) menu.addEventListener('click', function (e) {
    if (e.target === menu || e.target.closest('[data-close-menu]')) close()
  })
  function goTo (sel) { var el = document.querySelector(sel); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  var ctaMap = {
    'Browse matches': '#matches', 'All matches →': '#matches', 'Pick a match': '#matches',
    'Log in': '#site-footer', 'Create account': '#site-footer', 'Create your account': '#site-footer'
  }
  document.querySelectorAll('button').forEach(function (b) {
    var label = (b.textContent || '').trim()
    var target = ctaMap[label]
    if (target) b.addEventListener('click', function () { goTo(target) })
  })
})()
