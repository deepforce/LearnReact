import React from "react";
import Child from "./child";
import Child1 from "./child1";

/**
 * 计数例子
 * 
 * 定时器
 * 网络请求
 * 事件监听
 *   在组件被销毁前都应得到响应的处理
 */

const MyAPI = {
    count: 0,
    subscribe(cb) {
        this.intervalId = setInterval(()=>{
            this.count += 1;
            cb(this.count);
        }, 1000);
    },
    unSubscribe() {
        clearInterval(this.intervalId);
        this.reset();
    },
    reset() {
        this.count = 0;
    }
}

export default class Parent extends React.Component {

    state = {
        count: 0
    }

    // 监听事件
    componentDidMount() {
        MyAPI.subscribe((currentCount) => {
            this.setState({
                count:currentCount
            })
        });
    }

    // 销毁监听事件
    componentWillUnmount() {
        MyAPI.unSubscribe();
    }

    render() {
        console.log("parent -> render");
        
        return (
            <div>
                Parent: { this.state.count }
                <Child num={ this.state.count }/>
                <Child1 num={ 1 }/>
            </div>
        )
    }
}
