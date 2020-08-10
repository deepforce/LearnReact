import React from "react";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
// import { BrowserRouter as Router, Route} from "react-router-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import UCenter from "./pages/UCenter";
import NotFound from "./pages/NotFound";
import Demo from "./pages/Demo";
import Shop from "./pages/Shop";

/**chongidng
 * HashRouter:锚点链接
 * BrowserRouter:h5新特性 / history.push  如果上线之后，需要后台做一些处理：重定向处理 404bug
 */

/**
 * /mine/ucenter 包括了 /mine
 * 用exact={ true } 做精准匹配
 * 用stric={ true } 做trailing slash 的精准匹配 要和exact一起使用
 */

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Redirect from='/hellomine' to='/mine' />
          <Route exact path="/" component={Home}></Route>
          <Route strict exact path="/mine" component={Mine}></Route>
          <Route strict exact path="/mine/ucenter/:id?/:name?" component={UCenter}></Route>
          {/* <Route path="/demo" render={ () => <div>Hello Demo</div>}></Route> */}
          <Route path="/demo" render={ (props) => <Demo {...props} name={"你好"} />}></Route>
          <Route path="/shop" component={Shop} ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
