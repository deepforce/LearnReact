import React from "react"
import { withRouter } from "react-router-dom"


class MineDemo extends React.Component {

    clickHandler = () => {
        console.log(this.props);
        this.props.history.push("/");
    }

    // 当前组件没有直接被路由管理，所以没有路由对象
    // withRouter

    render() {
        return(
            <div>
                <button onClick={ this.clickHandler}>回到Home</button>
            </div>
        )
    }
}

// 高阶组件
export default withRouter(MineDemo)