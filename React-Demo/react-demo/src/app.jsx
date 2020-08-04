import React from "react"
import Home from "./Home"
import MyNav from "./MyNav"
import StateComponent from "./StateComponent"
// 用类的形式创建组件，Hook形式
class App extends React.Component{
    // 渲染函数
    render() {

        const nav1 = ["首页", "视频", "学习"];
        const nav2 = ["WEB", "Java", "Node"];

        return (
            <div>
                {/* <h1>Hello React Component</h1>
                <h3>学些React，最重要的是，心态要好！</h3>
                <Home />
                <MyNav nav={ nav1 } title = "路径导航"/>
                <MyNav nav={ nav2 } title = "学习导航"/> */}
                <StateComponent />
            </div>
        )
    }
}

export default App