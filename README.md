# compress-img
#### 自用前端压缩图片
#### 为了上传图片时压缩图片大小自己封装的一个小插件
# 使用方法

# 参数
### `file` FileList文件（input.files[0]）
### `width` 压缩后图片的宽度——因为按比例压缩，高度会按原图比例进行缩小（默认宽度为300px）
### `ratio` 压缩率——上限为1，如果为了清晰度可以选择0.95，如果为了大小可以选择0.7（默认压缩率为0.7）

# 实例
```javascript
compressPic({
    file: this.files[0], // 文件
    type: 'png', // 文件类型
    getBlob: function (file) {
        var fd = new FormData() // 最后获得的结果一定要通过formdata化为二进制流传递
        fd.append('image', file)
        $.ajax({
            url: 'http://localhost/api/fileTest.php',
            data: fd,
            type: 'post',
            contentType: false,
            processData: false,
            success: function (d) {
                console.log(d)
            }
        })
    }
})
```
