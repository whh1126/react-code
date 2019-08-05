import React, { Component } from 'react'
export class List extends Component {
  render() {
      let{lists,add}=this.props
    return <div>
       {lists&&lists.map((item,i)=>{
        return <ul key={i}>
                <li onClick={(e)=>{add(item.id,e)}}>
                {item.name}
                {item.children&&item.open?"💔":"💚"}
                {item.open&&item.children?<List lists={item.children} add={add}></List>:""}  
                </li>    
            </ul>
       
         })}
    </div>
  }
}

export default List
