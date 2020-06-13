export const registerImg = (UE) => {
  UE.ui['diyimg'] = function(editor) {
    const ui = new UE.ui.Button({
      className:"edui-for-simpleupload",
      title: editor.options.labelMap['simpleupload'] || editor.getLang("labelMap.simpleupload") || "",
      theme:editor.options.theme,
      onclick:function() {
        var fileInput = document.createElement('input');
        fileInput.id = 'ueditor-custom-upload'
        fileInput.type = 'file'
        fileInput.style.display = 'none'
        fileInput.click()
        fileInput.addEventListener('change', function(e) {
          const uploadFn = editor.getOpt('serverUrl');
          uploadFn(e.target.files[0]).then((res) => {
            editor.execCommand('insertimage',{src: '/upload/imgs/profile.jpeg'});
          })
        })
      }
    });
    UE.ui.buttons.diyimg = ui;
    return ui;
  };
}

// 图片上传
export const imgUpload = (file) => {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}