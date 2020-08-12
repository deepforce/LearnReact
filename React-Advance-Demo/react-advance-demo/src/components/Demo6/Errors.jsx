import React, { Component } from 'react'

export default class Errors extends Component {

    render() {
        return(
            <ul>
                {
                    null.map((element, index) => {
                        return <li key={index}>{ element }</li>
                    })
                }
            </ul>
        )
    }
}