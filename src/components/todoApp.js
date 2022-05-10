import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/welcome" element={<WelcomeComponent />} />
                    </Routes>
                </Router>

                {/* My Todo Application
                <WelcomeComponent />
                <LoginComponent /> */}
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Welcome inTodo Apps
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'iamyou',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }



    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             username: event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         password: event.target.value
    //     })

    // }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        //iamyou, dummy
        if (this.state.username === 'iamyou' && this.state.password === 'dummy') {
            console.log('Successful')
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        }
        else {
            this.setState({ hasLoginFailed: true })
            this.setState({ showSuccessMessage: false })
            console.log('Failed')
        }
        //console.log(this.state)
    }

    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password :<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button style={{ backgroundColor: 'green', fontSize: '20px' }} onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null;
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null;
// }

export default TodoApp