import React from 'react';
import qs from "querystring"
import ProxyDemo from './ProxyDemo';
import api from "./api"

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      banners:[]
    }
  }


  componentDidMount() {

    /**
     * fetch 基于promise
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     * 
     * get
     */

    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        banners: data.banner
      })
    })


    /**
     * post
     * 
     * ajax: 对象类型的参数
     * body: 字符串类型
     */
    fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "applicaiton/json,text/plain,*/*"
      },
      // 字符串拼接
      body: qs.stringify({
        user_id: "iwen@qq.com",
        password: 'iwen123',
        verification_code: "crfvw"
      })
      // body:"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
    }).then(res=> res.json())
    .then(data => {
      console.log(data);
      
    })


    api.getChengpin().then(res => res.json()).then(data => {
      console.log(data);
    })

    api.getLogin({
      user_id: "iwen@qq.com",
      password: 'iwen123',
      verification_code: "crfvw"
    }).then(res => res.json()).then(data => {
      console.log(data);
    })
  }

  render(){
    const { banners } = this.state;
    return (
    <div className="App">
      {
        banners.length > 0 ? 
        <ul>
          {
              banners.map((element, index) => {
                return <li key={index}>{ element.title }</li>
              })
          }
        </ul>
        : <div>等待数据加载</div>
      }
      <ProxyDemo />
    </div>
  );
  }
}