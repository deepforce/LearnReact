import React from "react"

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        // this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(element, event) {
        // this无指向
        // console.log(this);
        console.log(element, event);
    }

    // apply call bind:面试常见问题
    render() {
        const names = ['iwen', 'ime'];
        return (
            <div>
                Home
                {/* <button onClick={ this.clickHandler.bind(this) }> 按钮</button> */}
                {/* <button onClick={ this.clickHandler }> 按钮 </button> */}
                {/* <button onClick={ {e} => {this.clickHandler(e)}}> 按钮 </button> */}
                <ul>
                    {
                        names.map((element, index) => {
                            // return <li onClick={ this.clickHandler.bind(this, element) } key={index}> {element} </li>
                            return <li onClick={ (e) => this.clickHandler(element, e) } key={index}> {element} </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}