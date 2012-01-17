(function() {
  var Slide;

  Slide = (function() {

    function Slide(dom, manager, index) {
      this.dom = dom;
      this.manager = manager;
      this.index = index;
    }

    Slide.prototype.setCurrentOffset = function(offset) {
      if (Math.abs(offset) <= 2) {
        if (this.dom.parentNode !== this.manager.domStage) {
          this.manager.domStage.appendChild(this.dom);
        }
        this.setClassIf(offset === -2, 'far-past');
        this.setClassIf(offset === -1, 'past');
        this.setClassIf(offset === 0, 'current');
        this.setClassIf(offset === 1, 'future');
        return this.setClassIf(offset === 2, 'far-future');
      } else {
        if (this.dom.parentNode !== this.manager.domContent) {
          return this.manager.domContent.appendChild(this.dom);
        }
      }
    };

    Slide.prototype.setClassIf = function(cond, name) {
      if (cond) {
        return this.dom.classList.add(name);
      } else {
        return this.dom.classList.remove(name);
      }
    };

    return Slide;

  })();

  window.Slide = Slide;

}).call(this);
(function() {
  var SlideManager;

  SlideManager = (function() {

    function SlideManager() {
      var domslides, idx, s, _i, _len;
      this.slides = [];
      domslides = document.querySelectorAll('.slide');
      this.domStage = document.querySelector('#stage');
      this.domContent = document.querySelector('#content');
      idx = 0;
      for (_i = 0, _len = domslides.length; _i < _len; _i++) {
        s = domslides[_i];
        this.slides.push(new Slide(s, this, idx));
        idx += 1;
      }
      this.init_events();
      this.parse_history();
      this.init_slide_in();
    }

    SlideManager.prototype.next = function() {
      return this.setCurrent(this.current + 1);
    };

    SlideManager.prototype.prev = function() {
      return this.setCurrent(this.current - 1);
    };

    SlideManager.prototype.init_events = function() {
      return window.addEventListener('keydown', this.on_key_down.bind(this), false);
    };

    SlideManager.prototype.on_key_down = function(evt) {
      switch (evt.keyCode) {
        case 37:
          return this.prev();
        case 32:
        case 39:
          return this.next();
      }
    };

    SlideManager.prototype.init_slide_in = function() {
      var s, slides, _i, _len, _results;
      slides = document.querySelectorAll('.slide-in');
      _results = [];
      for (_i = 0, _len = slides.length; _i < _len; _i++) {
        s = slides[_i];
        s.addEventListener('slideIn', function() {
          return s.classList.remove('off');
        }, false);
        _results.push(s.addEventListener('slideOut', function() {
          return s.classList.add('off');
        }, false));
      }
      return _results;
    };

    SlideManager.prototype.parse_history = function() {
      var parts;
      parts = window.location.href.split('#');
      this.current = 0;
      if (parts.length === 2) this.current = parseInt(parts[1]) - 1;
      return this.setCurrent(this.current);
    };

    SlideManager.prototype.init_current = function() {
      this.current = 0;
      return this.setCurrent(this.current);
    };

    SlideManager.prototype.setCurrent = function(idx) {
      var i, s, _i, _len, _ref, _results;
      this.current = idx;
      this.setHistory(idx);
      i = 0;
      _ref = this.slides;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        s = _ref[_i];
        s.setCurrentOffset(i - idx);
        _results.push(i += 1);
      }
      return _results;
    };

    SlideManager.prototype.setHistory = function(idx) {
      var path;
      path = window.location.pathname + '#' + (idx + 1);
      return window.history.pushState({}, null, path);
    };

    return SlideManager;

  })();

  new SlideManager;

}).call(this);
