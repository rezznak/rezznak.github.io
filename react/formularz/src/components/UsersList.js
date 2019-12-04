import React, {Component} from 'react';


export default class UsersList extends Component {

    createUser = (user) => {
        return(
            <li key={user.key}>
                <div>{user.name} {user.lastname}</div>
                <button onClick={ () => this.removeUser(user)}>X</button>    
            </li>
        )
    }

    removeUser = (user) => {
        this.props.deleteUser(user);
    }


    render () {

        let listOfUsers = this.props.usersList;
        let usersDisp = listOfUsers.map(this.createUser);


        return(
            <ul className="the-list">
                {usersDisp}
            </ul>
        )
    }
}