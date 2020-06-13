/**
 * @module 百度富文本编辑器
 * 自定义菜单配置
 */
import React, { Component } from 'react'
import { imgUpload, registerImg } from './UploadImage'

// import {RegisterPasteImg} from './RegisterPasteImg'

const option =  {       
  serverUrl: imgUpload, // 服务器统一请求接口路径
  toolbars: [
    [
      'formatmatch', // 格式刷
      'fontsize', // 字号
      'undo', // 撤销
      'redo', // 重做
      'bold', // 加粗
      'italic', // 斜体
      'underline', // 下划线
      'lineheight', // 
      'subscript', // 下标
      'superscript', // 上标
      'removeformat', // 清除格式
      'justifyleft', // 居左对齐
      'justifyright', // 居右对齐
      'justifycenter', // 居中对齐
      'spechars',  // 特殊字符
      'diyimg', // 单图上传
      'inserttable', // 插入表格
    ]
  ],
  enableAutoSave: false,
  autoSyncFata: false,
  autoHeightEnabled: false,
  initialFrameHeight: 450,
  initialFrameWidth: '100%',
  zIndex: 1200,
  wordCount: false,
  pasteImageEnabled: true,
  dropFileEnabled: true,
}
 
class UEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {    }
  }
 
  componentDidMount () {
    const { id, content } = this.props;
    registerImg(window.UE)
    this.editor = window.UE.getEditor(`${id}`, option)
    // this.editor.ready(() => {
    //   console.log('<><><<><<')
    //   this.editor.addListener("selectionchange", () => {
    //     alert("123");
    //   });
    //   this.editor.setContent(content);
      
    // })
    // RegisterPasteImg(this.editor)
    setTimeout(() => {
      this.editor.setContent(content);
      this.editor.addListener("contentChange", () => {
        console.log('内容改变了', this.editor.getPlainTxt());
        console.log('内容改变了', this.editor.getContent());
      });
    }, 666)
    
  }
 
  // componentWillUnmount () {
  //   this.editor.destroy()
  // }

  // 初始化编辑器
  setConfig () {
    this.editor.ready(() => {
      this.editor.setContent(this.props.content);
      //alert('fuck ready'+editor.getAllHtml());

      this.editor.addListener("contentChange", () => {
        console.log('>>>>>>>>>>>>>>>')
        console.log('内容改变:'+ this.editor.getContent());
      });
      // $('#' + this.props.id + ' #edui1_toolbarbox').css('display','none');
      // this.editor.fireEvent("contentChange");
      
      // var $textarea = $('#' + this.props.id + '').parent().find('iframe').contents();
      // //$('#' + shellId + '').parent().find('iframe');

      // var fn = function(){
      //     alert(this.editor.getContent());
      // }
      
      // if (document.all) {
      //     $textarea.get(0).attachEvent('onpropertychange',function(e) {            
      //         fn();
      //     });
      // }else{
      //     $textarea.on('input',fn);
      // }
    })
  }
  
 
  // 获取编辑器内容
  getUEContent () {
    return this.editor.getContent()
  }
 
  render () {
    return (
      <script id={this.props.id} type="text/plain" />
    )
  }
 
}
 
export default UEditor