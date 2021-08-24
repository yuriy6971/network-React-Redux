import {createStore,combineReducers, applyMiddleware} from 'redux'
import profileReducer from './profile_reducer'
import usersReducer from './users_reducer'
import thunkMiddleware from 'redux-thunk'
import friendsReducer from './friends_reducer'


let reducers = combineReducers({
    profilePage : profileReducer,
    usersPage : usersReducer,
    friendsPage : friendsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store