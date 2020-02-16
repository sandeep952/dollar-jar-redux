import React, { Component } from 'react';
import Persons from '../Persons/Persons'
import AddPerson from '../AddPerson/AddPerson'
import { connect } from 'react-redux'

class DollarJar extends Component {


    state = {
        total: 0,
    }

    componentDidUpdate() {
        console.log("updated dollar jar");
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
                        <AddPerson />
                    </div>
                </div>
                <div className="total">
                    <h2> Total : {this.state.total} </h2>
                    <hr />
                </div>
                <Persons/>

            </div>);
    }

}

const mapStateToProps = (state) => {
    return {
        charge: state.charge
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        configureAmount: (event) => dispatch({
            type: 'CONFIGURE_AMOUNT',
            value: event.target.value
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DollarJar);