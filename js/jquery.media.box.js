;(function($) {
  'use strict';

  var pluginName = 'mediaBox';

  /**
   * class MediaBox
   * @param {string} elementName
   * @param {object} params
   * @constructor
   */
  var MediaBox = function MediaBox(elementName, params) {
    this._TYPE = {VIDEO: 'video', IMAGE: 'image'};
    this._params = params;
    this._eventsListener = [
        [elementName,             'click', '_onClick'],
        [this._params.elem.close, 'click', '_onCancel']
    ];
    this._initialize();
  };

  /**
   * initialize.
   * @private
   */
  MediaBox.prototype._initialize = function() {
    this._createBaseHtml();
    this._loadListeners();
  };

  /**
   * open box.
   * process => render and fadeIn
   * @param attr
   * @private
   */
  MediaBox.prototype._open = function(attr) {
    var type = this._type(attr.src);
    var html = this._params.html[type];
    html = this._parseHtml(attr, html);
    $(this._params.elem.arrange).html(html);
    var w = attr.width / 2, h = attr.height / 2;
    $(this._params.elem.contents).css({'margin-left':-w, 'margin-top':-h});
    $(this._params.elem.base).fadeIn(this._params.openSpeed);
  };

  /**
   * close box
   * @private
   */
  MediaBox.prototype._close = function() {
    $(this._params.elem.base).fadeOut(this._params.closeSpeed, function() {
      this._resetArrange();
    }.bind(this));
  };

  /**
   * reset arrange html.
   * @private
   */
  MediaBox.prototype._resetArrange = function() {
    $(this._params.elem.arrange).html('');
  };

  /**
   * append media box base html from body tag.
   * @private
   */
  MediaBox.prototype._createBaseHtml = function() {
    var html = this._parseHtml({src: this._params.closeImage}, this._params.html.base);
    $('body').append(html);
  };

  /**
   * Run method to registered event listener.
   * @private
   */
  MediaBox.prototype._loadListeners = function() {
    var _this = this;
    $.each(this._eventsListener, function(i, setting) {
      var elem = setting[0], event = setting[1], method = setting[2];
      $(document).on(event, elem, function() {
        _this[method]($(this));
      });
    });
  };

  /**
   * attr from parse html.
   * @param attr
   * @param html
   * @returns {*}
   * @private
   */
  MediaBox.prototype._parseHtml = function(attr, html) {
    $.each(attr, function(key, value) {
      key = ':' + key;
      html = html.replace(key, value);
    });
    return html;
  };

  /**
   * get media type.
   * @param src
   * @returns {*}
   * @private
   */
  MediaBox.prototype._type = function(src) {
    console.log(src);
    if (src.search(/(.*)\.(jpg|jpeg|gif|png|bmp|tif|tiff)/gi) != -1) {
      return this._TYPE.IMAGE;
    } else if (src.search(/(.*)\.(mp4)/gi) != -1) {
      return this._TYPE.VIDEO;
    }
    return null;
  };

  /**
   * on click event.
   * @param $e
   * @private
   */
  MediaBox.prototype._onClick = function($e) {
    if ($(this._params.elem.base).length) {
      $(this._params.elem.base).hide(0, function() {
        this._resetArrange();
      }.bind(this));
    }
    var src = $e.attr('data-src');
    var width = $e.attr('data-width');
    var height = $e.attr('data-height');
    this._open({src: src, width: width, height: height});
  };

  /**
   * on cancel event.
   * @private
   */
  MediaBox.prototype._onCancel = function() {
    this._close();
  };

  /**
   * Default params.
   */
  var defaults = {
    html: {
      base: '<div class="mb-base">' +
      '<div class="mb-contents">' +
      '<span class="mb-close mb-decoration-close"><img src=":src"></span>' +
      '<div class="mb-arrange"></div>' +
      '</div>' +
      '</div>',
      video: '<video class="mb-video mb-close" autoplay src=":src" width=":width" height=":height"></video>',
      image: '<img class="mb-image mb-close" src=":src" width=":width" height=":height" />'
    },
    elem: {
      base: '.mb-base',
      contents: '.mb-contents',
      arrange: '.mb-arrange',
      video: '.mb-video',
      image: '.mb-image',
      close: '.mb-close'
    },
    closeImage: 'close.png',
    openSpeed: 500,
    closeSpeed: 300
  };

  $.fn[pluginName] = function(params) {
    return new MediaBox($(this).selector, $.extend(defaults ,params));
  };

})(jQuery);