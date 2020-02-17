const initialState = {
    charge: 100,
    personsCount: 1,
    username:"",
    persons: [
        {
            name: "Sandeep",
            amount: 10,
            id: 1

        },

    ]


}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "CONFIGURE_AMOUNT":
            let newState = { ...state }
            let newCharge = action.value.trim()
            if (newCharge === "") {
                newState.charge = 0;
            }
            else {
                newCharge = parseInt(action.value)
                if (!isNaN(newCharge)) {
                    newState.charge = newCharge
                }

            }
            return newState;

        case 'INCREMENT_AMOUNT':
            let updatedPersons = [...state.persons];
            let i = 0;
            for (i = 0; i < updatedPersons.length; i++) {
                if (updatedPersons[i].id === action.personId) {
                    break;
                }
            }
            updatedPersons[i].amount += parseInt(state.charge);
            return {
                ...state,
                persons: updatedPersons
            }

        case 'DECREMENT_AMOUNT':

            {
                let updatedPersons = [...state.persons];
                let i = 0;
                for (i = 0; i < updatedPersons.length; i++) {
                    if (updatedPersons[i].id === action.personId) {
                        break;
                    }
                }
                updatedPersons[i].amount -= parseInt(state.charge);
                return {
                    ...state,
                    persons: updatedPersons
                }
            }

        case 'ADD_PERSON':
            let name = action.name
            if (name) {
                let newPersons = [...state.persons];
                let newCount = state.personsCount + 1;
                let newPerson = {
                    name: name,
                    amount: 0,
                    id: newCount
                }


                newPersons.push(newPerson)
                return {
                    ...state,
                    persons: newPersons,
                    personsCount: newCount

                }
            }

            return {
                ...state
            }

        case 'CHANGE_USERNAME':
            return {
                ...state,
                username:action.username
            }
        default:
            return state
    }

}

export default reducer;