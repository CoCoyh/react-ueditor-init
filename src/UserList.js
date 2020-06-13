import { Button, message } from 'antd'
import React, { useRef } from 'react'

import UEditor from './components/UEditor'

const props = {
  data: {
    subOrd: 1, //小题题号
    score: 4, //小题分数
    id: 1,
    showScore: true, // 是否展示小题分值
    answerLine: 5, // 生成2行解答横线
  },
  width: 946,
  height: 500,
};
export default () => {
    const filterImg = (str) => {
      //匹配图片（g表示匹配所有结果i表示区分大小写）
      const imgReg = /<img.*?(?:>|\/>)/gi;
      //匹配src属性
      // eslint-disable-next-line no-useless-escape
      const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      const arr = str.match(imgReg);
      alert('所有已成功匹配图片的数组：'+arr);
      if(!arr) {
        message.info('没有匹配的img')
        return
      }
      for (let i = 0; i < arr.length; i++) {
        var src = arr[i].match(srcReg);
        //获取图片地址
        if(src[1]){
          alert('已匹配的图片地址'+(i+1)+'：'+src[1]);
        }
        //当然你也可以替换src属性
        if (src[0]) {
          const t = src[0].replace(/src/i, "href");
          alert (t)
        }
      }
    }

    const ref = useRef(`${props.id}`);
    const handleSave = () => {
      console.log('>>>>>>>',  ref.current.editor.getContent())
      ref.current.editor.addListener('contentChange', () => {
        console.log('内容改变了：', ref.current.editor.getContent())
      })
      filterImg( ref.current.editor.getContent())
    }
    return (<div style={{ marginTop: 200}}>
      <UEditor ref={ref} content={'hello'} width={props.width} height={props.height} id={props.data.id}/>
      <Button onClick={handleSave}>保存</Button>
    </div>)
}