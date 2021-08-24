import React from 'react'
import Friends from './Friends'
import { connect } from 'react-redux'
import {setFriendsActionCreator} from '../../redux/friends_reducer'


class FriendClass extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Friends  friends = {this.props.friends}  />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        friends : state.usersPage.friends,    
    }
}


const FriendsContainer = connect(mapStateToProps, null)(FriendClass)

export default FriendsContainer