import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Welcome.css';
import { connect } from 'react-redux'
import { changeUsername } from '../Welcome/WelcomeActions'

class Welcome extends Component {
    constructor() {
        super();
        this.nameRef = React.createRef();
    }


    componentDidMount() {
        this.nameRef.current.focus();
    }

    render() {
        return (
            <div className="jumbotron welcome text-center ">

                <h1>Hey there!!</h1>
                <form>
                    <input type="text"
                        placeholder="Enter your name"
                        onChange={this.props.changeUsername}
                        value={this.props.username}
                        ref={this.nameRef} />

                    <Link to={{
                        pathname: "/dollar-jar",

                    }}>
                        <input type="submit" disabled={this.props.username.length === 0 ? true : false} className="btn btn-primary" value="submit" />

                    </Link>
                </form>

            </div>)
    }

}

let mapStateToProps = (state) => {
    return {
        username: state.welcomePage.username
    }
}

let mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        changeUsername: (event) => dispatch(changeUsername(event.target.value.trim()))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);