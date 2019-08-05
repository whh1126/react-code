import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
const list=(state={},action)=>{
    let newstate=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "inits":
        newstate.list=action.list
        return newstate;
        case "add":
      function bb(arr){
            let ss=arr.find(item=>item.id==action.id)
            if(ss){
                ss.open=!ss.open
            }else{
                arr.map(item=>{
                    if(item.children){
                        bb(item.children)
                    }
                })
            }
        }

        bb(newstate.list)
        return newstate;
        default:
        return state;
    }
}

const reducer=combineReducers({list})
const store=createStore(reducer,applyMiddleware(thunk))

export default store