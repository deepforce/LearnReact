import React from "react"
import querystring from "querystring"
import MineDemo from "./MineDemo";

const Mine = (props) =>{
    /**
     * 获取URL中带的参数?name=iwen&age=20
     */
    // const params = new URLSearchParams(props.location.search);
    // console.log(params.get("name"));
    // console.log(params.get("age"));

    
    // const value = querystring.parse(props.location.search);
    // console.log(value);
    // console.log(value.name);
    // console.log(value.age);
    
    // console.log(props);
    
    /**
     * 区别：
     * push: 叠加的，上一次页面会存在在堆栈里
     * replace: 替换，上一次页面会被替换掉
     */
    const clickHandler = () => {
        // props.history.push("/"); 
        props.history.replace("/");
    }

    return(
        <div>
            Mine
            <button onClick={ clickHandler }>回到Home页面</button>
            <MineDemo />
        </div>
    )
}

export default Mine;