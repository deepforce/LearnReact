import React, { Component } from 'react'

class Banner extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            banner: null
        }
    }

    componentDidMount() {
        fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
        .then(res => res.json())
        .then(banner => {
            this.setState({
                loading:false,
                banner: banner
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
                <h1>{this.state.banner.banner[0].title}</h1>
            )
        }
    }
}

export default Banner;
