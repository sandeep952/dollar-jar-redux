import React, { Component } from 'react';
import Persons from '../Persons/Persons'
import AddPerson from '../AddPerson/AddPerson'
import { connect } from 'react-redux'

class DollarJar extends Component {


    state = {
        total: 0,
    }

    componentDidMount = () => {
        //  this.calculateTotal();
    }


    addPersonHandler = (name) => {

       
        //        this.calculateTotal();
    }

    // calculateTotal = () => {
    //     let total = 0;
    //     this.state.persons.forEach((person) => {
    //         total += person.amount;
    //     })
    //     this.setState({
    //         total: total
    //     })
    // }

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
                        <div className="configure-amount">
                            <h5>Configure amount :<strong> {this.props.charge} </strong></h5>
                            <input type="text"
                                placeholder="Enter amount"
                                onChange={this.props.configureAmount} value={this.props.charge} />

                        </div>

                    </div>
                    <div className="col-md-6">
                        <AddPerson
                            addPerson={this.props.addPersonHandler} />


                    </div>
                </div>
                <div className="total">
                    <h2> Total : {this.state.total} </h2>
                    <hr />
                </div>
                <Persons
                    persons={this.props.persons}
                    handleIncrementAmount={this.props.handleIncrementAmount}
                    handleDecrementAmount={this.props.handleDecrementAmount}
                />

            </div>);
    }

}
const mapStateToProps = (state) => {
    return {
        charge: state.charge,
        persons: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        configureAmount: (event) => dispatch({
            type: 'CONFIGURE_AMOUNT',
            value: event.target.value
        }),

        handleIncrementAmount:(id)=>dispatch({
            type:'INCREMENT_AMOUNT',
            personId:id
        }),
        
        handleDecrementAmount:(id)=>dispatch({
            type:'DECREMENT_AMOUNT',
            personId:id
        }),

        addPersonHandler:(person_name)=>dispatch({
            type:'ADD_PERSON',
            name:person_name
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DollarJar);