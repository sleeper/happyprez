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
    @init_current()

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

  init_current: () ->
    @current = 0
    # Check the URL to get the first slide to display
#    parts = window.location.pathname.split('/slide')
#    if parts.length == 2
#      @current = parseInt(parts[1])
    @setCurrent( @current )

  setCurrent: (idx)->
    @current = idx
    i = 0
    for s in @slides
      s.setCurrentOffset(i - idx)
      i += 1

new SlideManager

