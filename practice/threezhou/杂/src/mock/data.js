import Mock from "mockjs"

Mock.mock("/api/list",[{
    id:"0",
    name:"传媒",
    open:false,
    children:[{
            name:"传媒1611A",
            id:'0-0',
            open:false,
    },{
        name:"传媒1611B",
        id:'0-1',
        open:false,
    }]
},{
    id:'1',
    name:"网站",
    open:false,
    children:[{
        name:"网站1611A",
        id:"1-0",
        open:false,
        children:[{
            name:"王雯茂",
            id:"1-0-0"
        },{
            name:"郜英杰",
            id:"1-0-1"
        }]
    },{
        name:"网站1611B",
        id:"1-1",
        open:false,
        children:[{
            name:"钱家豪",
            id:"1-1-0",
            children:[{
                name:"啦啦啦",
                id:"1-1-0-a"
            }]
        },{
            name:"张金城",
            id:"1-1-1"
        }]
    },{
        name:"网站1611C",
        id:"1-2",
        open:false,
        children:[{
            name:"郭小刚",
            id:'1-2-0'
        },{
            name:"侯瑞峰",
            id:'1-2-1'
        }]
    }]
}])