const initialState = {
    charge: 100,
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
                persons:updatedPersons                
            }
        
            case 'DECREMENT_AMOUNT':
                
                {let updatedPersons = [...state.persons];
                let i = 0;
                for (i = 0; i < updatedPersons.length; i++) {
                    if (updatedPersons[i].id === action.personId) {
                        break;
                    }
                }
                updatedPersons[i].amount -= parseInt(state.charge);
                return {
                    ...state,
                    persons:updatedPersons                
                }}
    

        default:
            return state
    }

}

export default reducer;