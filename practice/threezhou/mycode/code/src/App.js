import React, { Component } from 'react';
import axios from "axios"
import Box from "./view/box"
import Tan1 from "./view/tan1"
class App extends Component {
  state={
    data:[],
    cmm:false,
    id:""
  }
  render() {
    let {data,cmm}=this.state
    return <div className="App">
          <Box data={data} enters={this.enters} out={this.out} add={this.add} cmm={this.cmm} del={this.del}></Box>
          {!cmm?null:<Tan1 ok={this.ok}></Tan1>}
      </div>
  }
  componentDidMount(){
    axios.get("/data.json").then(res=>{
      this.setState({data:res.data})
    })
  }
  //滑入时
  enters=(id)=>{
    let data=this.state.data
    data.map((item,i)=>{
      return item.id==id?item.open=true:item.open=false
    })
    this.setState({data})
  }
  //离开时
  out=()=>{
    let data=this.state.data
    data.map((item,i)=>{
      return item.open=false
    })
    this.setState({data})
  }
  //点击时
  add=(id)=>{
    let data=this.state.data
    data.map((item,i)=>{
      return item.id==id?item.flag=true:item.flag=false
    })
    this.setState({data})
  }
  //重命名
  cmm=(open,id)=>{
    let data=this.state.data
    let ind=data.findIndex((item,i)=>{
      return item.id==id
    })
    data[ind].flag=false
    this.setState({cmm:open,id,data})
  }
  //确定
  ok=(name)=>{
    let data=this.state.data
    let id=this.state.id
    data.map((item,i)=>{
      return item.id==id?item.name=name:""
    })
    data.map((item,i)=>{
      return item.id==id?item.flag=false:""
    })
    this.setState({data,cmm:false})
  }
  //删除
  del=(id)=>{
    let data=this.state.data
    let ind=data.findIndex((item,i)=>{
      return item.id==id
    })
    data.splice(ind,1)
    data.map((item,i)=>{
      return item.open=false
    })
    this.setState({data,cmm:false})
  }
}

export default App;
