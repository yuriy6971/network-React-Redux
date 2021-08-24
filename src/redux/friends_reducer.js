const SET_FRIENDS_DATA = 'SET_FRIENDS_DATA';




let initialState  = {
    friendsData : [],
    
    
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FRIENDS_DATA :
            return {
                ...state,
                friendsData : action.usersData.filter(item => item.followed)
            }
            default :
            return state
    }
}

export const setFriendsActionCreator = (data) => {
    return {
        type :SET_FRIENDS_DATA,
        usersData : data
    }  
}




export default friendsReducer