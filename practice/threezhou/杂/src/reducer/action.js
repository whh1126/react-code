import axios from "axios"
import "../mock/data"
export default {
    inits:()=>{
        return (dispatch)=>{
            axios.get("/api/list").then(res=>{
               dispatch({type:"inits",list:res.data})
            })
        }
    },
    adds:(id)=>{
        console.log(id)
        return (dispatch)=>{
            dispatch({type:"add",id})
        }
    }
}