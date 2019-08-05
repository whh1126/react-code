import React, { Component } from 'react'
import { ok } from 'assert';

export class Tan1 extends Component {
  render() {
      let {ok}=this.props
    return <div className="tan1">
            <input type="text" ref={inp=>this.inp=inp}/>
            <button onClick={()=>ok(this.inp.value)}>确定</button>
      </div>
  }
}

export default Tan1
