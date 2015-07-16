# MediaBox
jQuery Plugin for video and image gallery.

### Example
http://noguhiro.github.io/MediaBox/

---

### Setup

##### JavaScript
```
$(document).ready(function() {
  'use strict';
  $('.demo').mediaBox();
});
```

### HTML
```
<button class="media" data-src="demo.png" data-width="100" data-height="100">OpenImage</button>
<button class="media" data-src="demo.mp4" data-width="100" data-height="100">OpenVideo</button>
```

---

### Settings.

##### defaults.
```
{
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
}
```

##### customize.
```
$(selector).mediaBox({
    closeImage: 'images/close.png',
    openSpeed: 100,
    closeSpeed: 100
});
```
---
