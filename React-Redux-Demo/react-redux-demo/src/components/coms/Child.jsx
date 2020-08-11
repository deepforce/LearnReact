import React from "react"

export default class Child extends React.Component {
    onClickHandler = (e) => {
        this.props.onMyEvent("父标题");
    }
    render() {
        return(
            <div>
                Child:{ this.props.title }
                <button onClick={ this.onClickHandler }>传递数据</button>
            </div>
        )
    }
}