import React from "react"

export default class Child1 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input1:0
        }
    }

    componentDidMount() {
        this.setState({
            input1:this.props.money
        })
    }

    
    changeHandler(e) {
        this.setState({
            input1:e.target.value
        })
    }

    render() {
        return(
            <div>
                <input type="text" value = { this.props.money } onChange={ this.changeHandler.bind(this) } />
            </div>
        );
    }
}