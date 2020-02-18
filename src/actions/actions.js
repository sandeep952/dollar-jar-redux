export const handleIncrementAmount = (id) => {
    return {
        type: 'INCREMENT_AMOUNT',
        personId: id
    }

}

export const handleDecrementAmount = (id) => {
    return {

        type: 'DECREMENT_AMOUNT',
        personId: id

    }
}

export const addPerson = (person_name) => {
    return {
        type: 'ADD_PERSON',
        name: person_name
    }

}

export const configureAmount = (amount)=>{
    return {
        type: 'CONFIGURE_AMOUNT',
        amount: amount
    }
}