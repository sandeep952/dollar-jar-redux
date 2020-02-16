import React, { Component } from 'react';
import Persons from '../Persons/Persons'
import AddPerson from '../AddPerson/AddPerson'
import { connect } from 'react-redux'

class DollarJar extends Component {


    state = {
        personsCount: 1,
        total: 0,
    }

    componentDidMount = () => {
        //  this.calculateTotal();
    }


    addPersonHandler = (name) => {

        if (name) {
            let newPersons = [...this.state.persons];
            let newCount = this.state.personsCount + 1;
            let newPerson = {
                name: name,
                amount: 0,
                id: newCount
            }

            newPersons.push(newPerson)
            this.setState({
                persons: newPersons,
                personsCount: newCount,

            })

        }
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

    handleDecrementAmount = (personId) => {
        let updatedPersons = [...this.state.persons];
        let i = 0;
        for (i = 0; i < updatedPersons.length; i++) {
            if (updatedPersons[i].id === personId) {
                break;
            }
        }
        updatedPersons[i].amount -= parseInt(this.props.charge);
        this.setState({
            persons: updatedPersons
        })
        //    this.calculateTotal();
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
                        <div className="configure-amount">
                            <h5>Configure amount :<strong> {this.props.charge} </strong></h5>
                            <input type="text"
                                placeholder="Enter amount"
                                onChange={this.props.configureAmount} value={this.props.charge} />

                        </div>

                    </div>
                    <div className="col-md-6">
                        <AddPerson
                            addPerson={this.addPersonHandler} />


                    </div>
                </div>
                <div className="total">
                    <h2> Total : {this.state.total} </h2>
                    <hr />
                </div>
                <Persons
                    persons={this.props.persons}
                    handleIncrementAmount={this.props.handleIncrementAmount}
                    handleDecrementAmount={this.handleDecrementAmount.bind(this)}
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
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DollarJar);