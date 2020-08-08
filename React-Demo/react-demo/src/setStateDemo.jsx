import React from "react"

export default class SetStateDemo extends React.Component {

    constructor() {
        super();
        this.state = {
            count:0
        }
    }

    increment = async () => {
        // this.setState({
        //     count: this.state.count+1
        // },() => {
        //     console.log(this.state.count);
        // })
        await this.setStateAsync({count:this.state.count+1});
        console.log(this.state.count);
    }

    // promise async 和 await

    setStateAsync(state){
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }

    render() {
        return (
            <div>
                setState是同步还是异步问题
                <p>{ this.state.count }</p>
                <button onClick={ this.increment }>修改</button>
            </div>
        )
    }
}