function compressPic(o) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        _img = new Image(),
        _w = 300,
        _ratio = 0.7,
        _fieldname = 'image'

    if (o.hasOwnProperty('width')) {
        _w = o.width
    }
    if (o.hasOwnProperty('ratio')) {
        _ratio = o.ratio
    }
    if (o.hasOwnProperty('type')) {
        _fieldname = o.filedname
    }

    _img.onload = function () {
        var wh = this.width / this.height
        canvas.width = _w
        canvas.height = _w / wh
        ctx.drawImage(this, 0, 0, _w, _w / wh)
        canvas.toBlob(function (blob) {
            o.getBlob(blob)
        }, "image/" + o.type, _ratio)
    }
    _img.src = getObjectURL(o.file)
    _img = null
}

function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file)
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file)
    }
    return url
}