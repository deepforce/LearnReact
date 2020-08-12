import React, { Component, Fragment } from 'react'

class Item extends React.Component {
    render() {
        return(
            /**
             * 不能使用div包裹li，不符合W3C标准
             */
            <Fragment>
                 <li>Demo2 Item1</li>
                 <li>Demo2 Item1</li>
            </Fragment>

            // 另一种写法
            // <>
            //      <li>Demo2 Item1</li>
            //      <li>Demo2 Item1</li>
            // </>
        )
    }
}

export default class Demo2 extends Component {
    render() {
        return (
            <ul>
                <Item />
            </ul>
        )
    }
}
