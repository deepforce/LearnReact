import React from "react"

export default class Child2 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input2:0
        }
    }
    
    // 组件固定时
    componentDidMount() {
        this.setState({
            input2:this.props.money * 7
        })
    }

    // props变化
    changeHandler(e) {
        this.setState({
            input2:e.target.value
        })
    }
    
    render() {
        return(
            <div>
                <input type="text" value = {this.props.money * 7} onChange={ this.changeHandler.bind(this) } />
            </div>
        );
    }
}