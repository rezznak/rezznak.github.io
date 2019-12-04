import React, {Component} from 'react';
import './Form.css';
import UsersList from './UsersList';

export default class Form extends Component {
    constructor(props){
        super(props);



        this.state = {
            users: [],
        }
    }

    addUser = () => {

        let newUser = {
            key: Date.now(),
            name: this._inputName.value,
            lastname: this._inputLastname.value
        }
        
        if ((newUser.name).trim() !== "" && (newUser.lastname).trim() !== ""){
            
            this.setState((prevState) => {
                
                return{
                    users: prevState.users.concat(newUser)
                }
                
            })
            // else {
            //     let achtung = "Uzupełnij pola.";

            // }
            
        }   
        
        this._inputName.value = "";
        this._inputLastname.value = "";
        //console.log(newUser);
    }  
//filtrujemy tablicę szukając DANEGO użytkownika o po kluczu i zwracamy tablicę która go nie zawiera
    deleteUser = (removingUser) => {
        let deletingUser = this.state.users.filter(user => user.key !== removingUser.key)
        console.log(deletingUser);
        this.setState((prevState) => {
            return{
            users: deletingUser,
            }
        })
    //     console.log(`W komponencie User ${removingUser}`);
    //     console.log(removingUser);
    }

    //atrybut ref pozwala odnosić się później do danego elementu!!!!

    render() {
        return (
            <div className="form-container users-main">
                <h1>{this.props.tytul}</h1>
                <input type="text" ref={ (data) => {this._inputName = data} } name="name" placeholder="Twoje imię" onInput={this.handleInput}/>&nbsp;
                <input type="text" ref={ (data) => {this._inputLastname = data} } name="name" placeholder="Twoje nazwisko"/>
                <button onClick={this.addUser}>Dodaj</button>
                {/* <ul>
                    {this.state.users.map(user => {
                        // react wymaga przy listowaniu uniklanego klucza "key"
                        return <li key>{user}</li>
                    })}
                </ul> */}
                <UsersList usersList={this.state.users} deleteUser={this.deleteUser}/>
            </div>
        )
            
        
    }
}