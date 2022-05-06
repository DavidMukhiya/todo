import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                My Todo Application
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component {
    render() {
        return (
            <div>
                User Name : <input type="text" name="username" />
                Password :<input type="password" name="password" />
                <button style={{ backgroundColor: 'green', fontSize: '20px' }} >Login</button>
            </div>
        )
    }
}

export default TodoApp