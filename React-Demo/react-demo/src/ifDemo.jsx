import React from "react"

export default class IfDemo extends React.Component {
    /**
     * 常用的应用场景：
     *  1.对视图条件进行切换
     *  2.做缺省值
     */

    constructor() {
        super();
        this.state = {
            isLogin: false,
            names: ["iwen"]
        }
    }

    clickHandler = () => {
        this.setState({
            isLogin:true
        })
    }

    render() {

        const { names } = this.state;
        let showView = this.state.isLogin ? 
        <div>iwen</div> :
        <div>请登录</div>

        return (
            <div>
                条件渲染: { showView }
                <button onClick={ this.clickHandler }>登录</button>
                {
                    names.length > 0 ?
                    <div>
                    {
                        names.map((element, index) => {
                            return <p key={index}>{ element }</p>
                        })
                    }
                    </div> 
                    :
                    <div>请等待数据正在请求......</div>
                }
                
                
            </div>
        )
    }
}