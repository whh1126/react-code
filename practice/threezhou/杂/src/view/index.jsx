import React, { Component } from 'react'
import getdata from "../reducer/action"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import List from "./list"
export class Index extends Component {
  render() {
      let {list:{list}}=this.props
      console.log(this.props)
    return (
      <div>
        {/* {this.aa(list)} */}
        <List lists={list} add={this.add}></List>
      </div>
    )
  }
  componentDidMount(){
      this.props.inits()
  }
  // aa=(list)=>{
  //   return list&&list.map((item,i)=>{
  //       return <ul key={i}>
  //               <li onClick={this.add.bind(this,item.id)}>
  //               {item.name}
  //               {item.children&&item.open?"💔":"💚"}
  //               {item.open&&item.children?this.aa(item.children):""}  
  //               </li>    
  //           </ul>
       
  //   })
  // }
  add=(id,e)=>{
     e.stopPropagation()
      this.props.adds(id)
}
}

export default connect((state)=>{
    return state
},(dispatch)=>bindActionCreators(getdata,dispatch))(Index)
