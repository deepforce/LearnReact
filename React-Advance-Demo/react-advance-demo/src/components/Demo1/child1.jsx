import React from 'react';
export default class Child1 extends React.PureComponent{


    /**
     * Component:不会对数据进行比较
     * PureComponent:对数据进行浅比较 props
     */

    render() {
        console.log("child1 -> render"); // 父组件变化， 子组件也重新渲染
        return (
            <div>
                Child1: { this.props.num }
            </div>
          );
    }
  
}