import React from "react"

export default class KeyDemo extends React.Component{

    constructor() {
        super();
        this.state = {
            userinfo: [
                {
                    name:"iwen",
                    age:20,
                    sex:"男",
                    jobs:['11', '222', '333']
                },
                {
                    name:"ime",
                    age:20,
                    sex:"男",
                    jobs:['11', '222', '333']
                },
                {
                    name:"frank",
                    age:20,
                    sex:"男",
                    jobs:['11', '222', '333']
                }
            ]
        }
    }

    clickHandler = () => {
        this.setState({
            userinfo:this.state.userinfo.concat([{
                name:"sakura",
                age:30,
                sex:"女",
                jobs:['333','444','555']
            }])
        })
    }

    render() {
        
        return (
            <div>
                <ul>
                    {
                        this.state.userinfo.map((element, index) => {
                            return(
                                <li key={ index }>
                                    <span>{ element.name }</span>
                                    <span>{ element.age }</span>
                                    <span>{ element.sex }</span>
                                <div>
                                    {
                                        element.jobs.map((childElement, childIndex) => {
                                            return <span key={childIndex}> { childElement }</span>
                                        })
                                    }
                                </div>
                                </li>
                                
                            )
                        })
                    }
                </ul>
                <button onClick={ this.clickHandler }>添加数据</button>
            </div>
        )
    }
}