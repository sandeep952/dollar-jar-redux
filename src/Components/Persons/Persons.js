import React, { Component } from 'react';
import Person from '../Person/Person'
import { connect } from 'react-redux'
class Persons extends Component {
    state={
        total:0
    }
    calculateTotal = () => {
        let total = 0;
        this.props.persons.forEach((person) => {
            total += person.amount;
        })
        this.setState({
            total: total
        })
    }

    componentDidMount(){
        this.calculateTotal();
    }

    componentDidUpdate(){
        console.log("persons updated")
    }
    render() {

        return (<div>
            <div className="total">
                <h2> Total : {this.state.total} </h2>
                <hr />
            </div>

            {this.props.persons.map((person) => <Person name={person.name}
                amount={person.amount}
                key={person.id}
                incrementAmount={() => {
                    this.props.handleIncrementAmount(person.id)
                    this.calculateTotal();
                }}
                decrementAmount={() => {
                    this.props.handleDecrementAmount(person.id)
                    this.calculateTotal();
                }}
            />)}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrementAmount: (id) => dispatch({
            type: 'INCREMENT_AMOUNT',
            personId: id
        }),

        handleDecrementAmount: (id) => dispatch({
            type: 'DECREMENT_AMOUNT',
            personId: id
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);