import React, { Component } from 'react'

class Chengpin extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            chengpin: null
        }
    }

    componentDidMount() {
        fetch("http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php")
        .then(res => res.json())
        .then(chengpin => {
            this.setState({
                loading:false,
                chengpin: chengpin
            });
        })
    }
    

    render() {
        if (this.state.loading) {
            return (
                <div>
                    loading
                </div>
            )
        } else {
            return (
                <h1>{this.state.chengpin.chengpinInfo[0].title}</h1>
            )
        }
    }
}

export default Chengpin;
