import React, { Component } from 'react'

export class Box extends Component {
    state={
        open:false
    }
  render() {
      let {data,enters,out,add,cmm,del}=this.props
      let {open}=this.state
    return <div className="wrap">
            {data&&data.map((item,i)=>{
                return <div className="box" key={item.id} onMouseOver={()=>enters(item.id)} style={{background:`${item.open?"rgba(0,0,0,.3)":""}`}} onMouseOut={()=>out()}>
                    <span onClick={()=>add(item.id)}>{item.open?"⚙":""}</span>
                    <p style={{background:item.color}}></p>
                    <b>{item.name}</b>
                   {!item.flag?null:<div className="t1">
                        <p onClick={()=>cmm(true,item.id)}>重命名</p>
                        <p onClick={()=>del(item.id)}>删除</p>
                   </div>} 
                </div>
            })}
      </div>
  }
}

export default Box
