import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from "../constants"

const initialState = {
    user:{},
    isFetching: false,
    error: null,
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_SUCCESS:
            // 三大原则之一：State是只读的, 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
            return {
                isFetching: false,
                error: null,
                user:action.user
            };
        case FETCH_USER_REQUEST:
            return {
                isFetching: true,
                error: null,
                user:{}
            };
        case FETCH_USER_FAILURE:
            return {
                isFetching: false,
                error: action.error,
                user:{}
            };
        default:
            return state;
    }
}

export default user;