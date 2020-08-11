import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger";
import thunk from "redux-thunk";
// import reducer from "./reducers/counter";
import { Provider } from "react-redux";
import rootReducer from "./reducers"

// 异步和同步
// 定时器，网络请求 （异步）

// 中间件
// const logger = store => next => action => {
//   console.log("dispatch->", action);
//   let result = next(action); // 加载下一个中间件
//   console.log("next state->", store.getState());
//   return result;
// }

// const error = store => next => action => {
//   try {
//       next(action);
//   } catch (e) {
//     console.log("error->", e);
//   }
// }


// 创建store仓库
// const store = createStore(rootReducer, {}, applyMiddleware(logger,error));
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)));

// 获取state值
// store.subscribe(() => console.log("state:", store.getState()));

// const render = () => {
//   ReactDOM.render(
//     <App
//       onIncrement={() => {
//         store.dispatch({ type: "INCREMENT" });
//       }}
//       onDecrement={() => {
//         store.dispatch({ type: "DECREMENT" });
//       }}
//       value={store.getState()}
//     />,
//     document.getElementById("root")
//   );
// };
// render();
// store.subscribe(render);



ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
  ,
  document.getElementById("root")
);
