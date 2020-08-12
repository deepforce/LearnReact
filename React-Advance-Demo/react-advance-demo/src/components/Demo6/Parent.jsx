import React, { Component } from 'react'
import Errors from "./Errors"
import ErrorBoundary from "./ErrorBoundary"

export default class Parent extends Component {

    state = {
        count:0
    }

    Increment = () => {
        this.setState({
            count:this.state.count+1
        }) 
    }

    Decrement = () => {
        this.setState({
            count:this.state.count-1
        }) 
    }


    render() {
        return (
            <div>
                <h3>这是一个标题</h3>
                <p>{ this.state.count }</p>
                <ErrorBoundary render={(error, errorInfo) => <p>{"加载时发生错误"}</p>}>
                    <Errors />
                </ErrorBoundary>
                <button onClick={ this.Increment }>Increment</button>
                <button onClick={ this.Decrement }>Decrement</button>
            </div>
        )
    }
}
