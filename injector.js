function injectJs (link) {
  var scr = document.createElement('script')
  scr.type = 'text/javascript'
  scr.src = link;
  (document.head || document.body || document.documentElement).appendChild(scr)
}

if (/\/experiences\//.test(window.location.href)) {
  injectJs(window.chrome.extension.getURL('background.js'))
}
