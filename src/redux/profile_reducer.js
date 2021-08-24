import { usersAPI } from "../api/api";




const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW-POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_CURRENT_ID = "SET_CURRENT_ID"
const CLEAN_POSTDATA = "CLEAN_POSTDATA"
const SHOW_POSTS = 'SHOW_POSTS'
const HIDE_POSTS = 'HIDE_POSTS'


let initialState = {
    postData : [
        // {id : 1, message : "hello, my friends!", likeCount : "3"},
        // {id : 2, message : "I learn React", likeCount : "7"},
        // {id : 3, message : "I learn Redux twoo", likeCount : "5"}
    ],

    newPostText : "",
    profile : null,
    currentId : null,
    showPosts : false
    
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case  UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText : action.newText
            }

            case ADD_POST :
                
                   const  objNewPost = {
                       id : 5,
                       message : state.newPostText,
                       likeCount : 0
                }
                return {
                    ...state,
                    postData : [objNewPost,...state.postData],
                    newPostText : ""
                }

                case SET_USER_PROFILE : 
                return {
                    ...state,
                    profile : action.profile
                } 
                case SET_CURRENT_ID : 
                return {
                  ...state,
                  currentId : action.currentId
                }
                case CLEAN_POSTDATA : 
                return {
                    ...state,
                    postData : []
                }
                case SHOW_POSTS : 
                return {
                    ... state,
                    showPosts : true
                }
                case HIDE_POSTS :
                    return {
                        ...state,
                        showPosts :false
                    }
                
                default :
                return state
    }
}

export const  UpdateNewPostTextActionCreator = (text) => {
    return {
        type :  UPDATE_NEW_POST_TEXT,
        newText : text
    }
}

export const AddPostActionCreator = () => {
     return {
         type : ADD_POST

     }
}
export const setUserProfileActionCreator = (profile) => {
    return {
        type : SET_USER_PROFILE,
        profile : profile
    }  
}
export const setCurrentIdActionCreator = (browserUserId) => {
    return {
        type: SET_CURRENT_ID,
        currentId : browserUserId

    }
}
export const cleanPostDataActionCreator = () => {
    return {
        type : CLEAN_POSTDATA
    }
}
export const showPostsActionCreator = () => {
    return {
        type : SHOW_POSTS
    }
}
export const hidePostsActionCreator = () => {
    return {
        type : HIDE_POSTS
    }
}







export default profileReducer

