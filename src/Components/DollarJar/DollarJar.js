import React, { Component } from 'react';
import Persons from '../Persons/Persons'
import AddPerson from '../AddPerson/AddPerson'
import ConfigureAmount from '../ConfigureAmount/ConfigureAmount'
import { connect } from 'react-redux'

class DollarJar extends Component {


    componentDidUpdate() {
        console.log("updated dollar jar");
    }


    render() {

        //let username = this.props.location.username
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Hello {this.props.charge}</h1>
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



export default connect(null, null)(DollarJar);