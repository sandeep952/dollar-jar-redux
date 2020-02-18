import React, { Component } from 'react';
import Person from '../Person/Person'
import { connect } from 'react-redux'
import { handleDecrementAmount} from '../../actions/actions';
import { handleIncrementAmount} from '../../actions/actions';
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
        persons: state.dollarJarApp.persons,
        
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrementAmount: (id) => dispatch(handleIncrementAmount(id)),

        handleDecrementAmount: (id) => dispatch(handleDecrementAmount(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);