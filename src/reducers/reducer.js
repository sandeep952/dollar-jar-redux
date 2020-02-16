const initialState = {
    charge: 100

}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "CONFIGURE_AMOUNT":
            let newState={...state}
            let newCharge = action.value.trim()
            if (newCharge === "") {
                newState.charge=0;
            }
            else {
                newCharge = parseInt(action.value)
                if (!isNaN(newCharge)) {
                    newState.charge=newCharge
                }
    
            }
            return newState;
        
        default:
            return state
    }
    
}

export default reducer;