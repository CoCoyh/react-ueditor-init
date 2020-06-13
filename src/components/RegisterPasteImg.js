export const RegisterPasteImg = (UE, editor) => {
  UE.plugins['autoupload'] = () => {
    let me = this;

    const insertBase64Image = (file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            editor.execCommand('insertimage', {
                src: this.result,
                _src: this.result
            });
        };
        reader.readAsDataURL(file);
    }
 
    const sendAndInsertImage = (file, editor) => {
        //模拟数据
        let fd = new FormData();
        fd.append(editor.options.imageFieldName || 'upfile', file, file.name || ('blob.' + file.type.substr('image/'.length)));
        fd.append('type', 'ajax');
        let xhr = new XMLHttpRequest();
        xhr.open("post", me.options.imageUrl, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.addEventListener('load', function (e) {
            try {
                // eslint-disable-next-line no-eval
                const json = eval('(' + e.target.response + ')'),
                    link = json.url,
                    picLink = me.options.imagePath + link;
                editor.execCommand('insertimage', {
                    src: picLink,
                    _src: picLink
                });
            } catch (er) {
            }
        });
        xhr.send(fd);
    };
 
    const getPasteImage = (e) => {
        return e.clipboardData && e.clipboardData.items && e.clipboardData.items.length === 1 && /^image\//.test(e.clipboardData.items[0].type) ? e.clipboardData.items : null;
    }
 
    const getDropImage = (e) => {
        return e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files : null;
    }
 
    editor.addListener('ready', () => {
        if (window.FormData && window.FileReader) {
            const autoUploadHandler = (e) => {
                let hasImg = false,
                    items;
                //获取粘贴板文件列表或者拖放文件列表
                items = e.type === 'paste' ? getPasteImage(e.originalEvent) : getDropImage(e.originalEvent);
                if (items) {
                    let len = items.length;
                    let file;
                    while (len--) {
                        file = items[len];
                        if (file.getAsFile) file = file.getAsFile();
                        if (file && file.size > 0 && /image\/\w+/i.test(file.type)) {
                            editor.getOpt('convertImageToBase64Enable') ? insertBase64Image(file, editor) : sendAndInsertImage(file, me);
                            hasImg = true;
                        }
                    }
                    if (hasImg) return false;
                }
 
            };
            editor.getOpt('pasteImageEnabled') && me.$body.on('paste', autoUploadHandler);
            editor.getOpt('dropFileEnabled') && me.$body.on('drop', autoUploadHandler);
 
            //取消拖放图片时出现的文字光标位置提示
            editor.$body.on('dragover', function (e) {
                if (e.originalEvent.dataTransfer.types[0] === 'Files') {
                    return false;
                }
            });
        }
    });
  }
  return;
}