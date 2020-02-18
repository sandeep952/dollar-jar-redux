import * as actionTypes from './actionTypes'
export const incrementAmount = (id) => {
    return {
        type: actionTypes.INCREMENT_AMOUNT,
        personId: id
    }

}

export const decrementAmount = (id) => {
    return {

        type: actionTypes.DECREMENT_AMOUNT,
        personId: id

    }
}

export const addPerson = (person_name) => {
    return {
        type: actionTypes.ADD_PERSON,
        name: person_name
    }

}

export const configureAmount = (amount)=>{
    return {
        type: actionTypes.CONFIGURE_AMOUNT,
        amount: amount
    }
}