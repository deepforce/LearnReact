import React from 'react';
export default class Child extends React.Component{


    // 防止子组件重新渲染
    /**
     * 
     * @param {*} nextProps 
     * @param {*} nextState
     * 
     * 关于渲染问题
     */
    shouldComponentUpdate(nextProps, nextState) {
        // 查看下一次传递的值是否和当前一样，如一样则不重新渲染
        if (nextProps.num === this.props.num) {
            return false;
        }
        return true;
    }

    render() {
        console.log("child -> render"); // 父组件变化， 子组件也重新渲染
        return (
            <div>
                Child: { this.props.num }
            </div>
          );
    }
  
}