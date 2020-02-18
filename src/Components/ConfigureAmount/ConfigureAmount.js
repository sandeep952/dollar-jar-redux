import React, { Component } from 'react'
import {connect} from 'react-redux'
import {configureAmount} from '../../actions/actions'
class ConfigureAmount extends Component {

    
    changeAmount = (event)=>{
        let newAmount = event.target.value;
        this.props.configureAmount(newAmount)
    }

    render() {

        return (
            <div className="configure-amount">
                <h5>Configure amount :<strong> {this.props.charge} </strong></h5>
                <input type="text"
                    placeholder="Enter amount"
                    onChange={this.changeAmount} value={this.props.charge} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        charge: state.dollarJarApp.charge
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        configureAmount: (amount) => dispatch(configureAmount(amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigureAmount);

