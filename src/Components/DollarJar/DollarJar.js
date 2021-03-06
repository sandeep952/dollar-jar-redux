import React, { Component } from 'react';
import Persons from '../Persons/Persons'
import AddPerson from '../AddPerson/AddPerson'
import ConfigureAmount from '../ConfigureAmount/ConfigureAmount'
import { connect } from 'react-redux'

class DollarJar extends Component {

    

    UNSAFE_componentWillMount(){
        if(!this.props.username){
            this.props.history.push('/')
        }
       
    }




    render() {

        let username = this.props.username
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Hello {username}</h1>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <ConfigureAmount />
                    </div>

                    <div className="col-md-6">
                        <AddPerson />
                    </div>
                </div>

                <Persons />

            </div>);
    }

}

let mapStateToProps = (state)=>{
    return {
        username :state.welcomePage.username
    }
}

export default connect(mapStateToProps, null)(DollarJar);