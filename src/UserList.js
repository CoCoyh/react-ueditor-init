import React, { Component } from 'react'
// 引入 UEditor 组件
import UEditor from './components/UEditor'
import { Button } from 'antd'
 
class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initData: ''
    }
  }
  // 富文本编辑器 保存
  saveEditor = () => {
    console.log(this.refs.ueditor.getUEContent())
  }
  render() {
    return (
      <div>
        {/* 使用UEditor 组件 */}
        <UEditor ref="ueditor" initData={this.state.initData} />
        <Button type="primary" onClick={this.saveEditor}>
          保存
        </Button>
      </div>
    )
  }
}
 
export default UserList