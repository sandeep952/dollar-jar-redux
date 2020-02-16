import React from 'react';
import Person from '../Person/Person'
import {connect} from 'react-redux'
let Persons = (props) => {
    return (<div>
        {props.persons.map((person) => (<Person name={person.name}
                amount={person.amount}
                key={person.id}
                incrementAmount={()=>props.handleIncrementAmount(person.id)}
                decrementAmount={()=>props.handleDecrementAmount(person.id)}
            />
            )
        )}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
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