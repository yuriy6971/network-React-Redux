import { usersAPI } from '../api/api.js'
import { setUserProfileActionCreator } from './profile_reducer.js';


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_FETCHING = "SET_FETCHING"
const SET_USERS_POSTS = "SET_USERS_POSTS"



const initialState = {
    users: [],
    photoPeople: ["https://wl-adme.cf.tsp.li/resize/728x/jpg/cf3/3eb/cebf385e9da99914a27f31c22d.jpg", "https://im.kommersant.ru/Issues.photo/CORP/2017/09/15/KMO_152927_00258_1_t218_132144.jpg", "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty27.jpg", null, "https://wl-adme.cf.tsp.li/resize/728x/jpg/a51/8fa/c450dc5f3ca886f517455134d7.jpg", null, "https://cdn.maximonline.ru/bd/6e/64/bd6e64263229eb814c1e98e9396f3df5/728x728_1_78f26167f37d857d5cb65b1ac6ccc68c@1024x1024_0xac120002_12527602361550233724.jpg", null, null, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZlZ5Y0a-tCzuI-AXQOHuPX42wlictWl4xg&usqp=CAU"],
    boollfollowed : [false,false,false,false,false,false,false,false,false,false],
    isFetching: false,
    postUsersData: [],
    indUserPosts: [],
    friends: [],
  //  booll: false





}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                 users: state.users.map(item =>  item),
                friends : [...state.friends,action.user],
                ...state.boollfollowed[action.user.id - 1] = true,
            }

        case UNFOLLOW:
           // const arrUserId = state.friends.map(item => item.id)
            // let result = arrUserId.indexOf(action.user.id)
            return {
                ...state,
                users: state.users.map(item => item),
                friends : state.friends.filter(item => item.id != action.user.id),

                ...state.boollfollowed[action.user.id - 1] = false
                
            }
        case SET_USERS:
            return {
                ...state,

                users: action.users.map((item, index) => {
                    return { ...item,  photo: state.photoPeople[index] }
                }),

            }


        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.toggle
            }

        case SET_USERS_POSTS:
            return {
                ...state,
                postUsersData: action.postUsersData
            }


        default: return state
    }
}

export const followAc = (follower) => {
    return {
        type: FOLLOW,
        user: follower
    }
}

export const unfollowAC = (follower) => {
    return {
        type: UNFOLLOW,
        user: follower
    }
}

export const setUsersAC = (usersNetwork) => {
    return {
        type: SET_USERS,
        users: usersNetwork,

    }
}

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(setFetchingAC(true))
        usersAPI.getUsers()
            .then(response => {
                dispatch(setFetchingAC(false))
                dispatch(setUsersAC(response.data))

            })
    }
}

export const setUsersPostsActionCreator = (usersPosts) => {
    return {
        type: SET_USERS_POSTS,
        postUsersData: usersPosts

    }
}

export const getUsersPostsThunkCreator = () => {
    return (dispatch) => {
        usersAPI.getPosts()
            .then(response => {
                dispatch(setUsersPostsActionCreator(response.data))
            })
    }
}

export const setFetchingAC = (boolFetch) => {
    return {
        type: SET_FETCHING,
        toggle: boolFetch
    }
}


export default usersReducer