let deferred
defer()

function defer () {
  const ele = document.querySelector('.ace_editor')
  if (window.ace && ele) {
    if (deferred) window.clearTimeout(deferred)
    loadVim()
  } else {
    deferred = setTimeout(defer, 250)
  }
}

function loadVim () {
  window.ace.require('ace/lib/net').loadScript('https://rawgithub.com/ajaxorg/ace-builds/master/src-min-noconflict/keybinding-vim.js',
    function () {
      const req = window.ace.require('ace/keyboard/vim')
      const Vim = req.Vim
      const editor = document.querySelector('.ace_editor').env.editor
      editor.setKeyboardHandler(req.handler)
      window.Vim = Vim
      Vim.map('fj', '<Esc>', 'insert')
      Vim.map('fj', '<Esc>', 'visual')
    }
  )
}
