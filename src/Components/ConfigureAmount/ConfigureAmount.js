import React, { Component } from 'react'
import {connect} from 'react-redux'
class ConfigureAmount extends Component {
    render() {

        return (
            <div className="configure-amount">
                <h5>Configure amount :<strong> {this.props.charge} </strong></h5>
                <input type="text"
                    placeholder="Enter amount"
                    onChange={this.props.configureAmount} value={this.props.charge} />
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfigureAmount);

