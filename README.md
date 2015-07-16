# MediaBox
Jquery Video, Image Gallery Box.

### Example
http://noguhiro.github.io/MediaBox/


### option

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