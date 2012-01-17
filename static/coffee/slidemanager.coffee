# vim: ts=2 sw=2 et :
class SlideManager
  constructor: () ->
    @slides = []
    domslides = document.querySelectorAll('.slide')
    @domStage = document.querySelector('#stage')
    @domContent = document.querySelector('#content')

    idx = 0
    for s in domslides
      @slides.push new Slide s, this, idx
      idx += 1

    @init_events()
    @parse_history()
    @init_slide_in()

  next: ()->
    @setCurrent( @current + 1 )

  prev: ()->
    @setCurrent( @current - 1)

  init_events: () ->
    window.addEventListener 'keydown', @on_key_down.bind(this), false

  on_key_down: (evt) ->
    switch evt.keyCode
      when 37 then @prev()
      when 32, 39 then @next()

  init_slide_in: ()->
    slides = document.querySelectorAll('.slide-in')
    for s in slides
      s.addEventListener 'slideIn', () ->
        s.classList.remove('off')
      , false
      s.addEventListener 'slideOut', ()->
        s.classList.add('off')
      , false


  parse_history: ()->
    parts = window.location.href.split('#')
    @current = 0
    if parts.length == 2
      @current = parseInt(parts[1])-1;
    @setCurrent( @current )


  setCurrent: (idx)->
    @current = idx
    @setHistory( idx )
    i = 0
    for s in @slides
      s.setCurrentOffset(i - idx)
      i += 1

  setHistory: (idx)->
    path = window.location.pathname + '#' + (idx+1)
    window.history.pushState({}, null, path)


new SlideManager

