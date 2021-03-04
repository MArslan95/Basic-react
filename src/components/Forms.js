import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic:'react'
        }
    }
    handelUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        }
        handelChange=(event)=>{
            this.setState({
                comment:event.target.value
            })
        }
        handelChangetopic=(event)=>{
            this.setState({
                topic :event.target.value
            })
        }
        handelSubmit=(event)=>
        {
            alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
            event.preventDefault();
        }
    render() {
        const {username,comment,topic}=this.state
        return (
            <form onSubmit={this.handelSubmit}>  
                <div>
                    <label>User Name</label>
                    <input type='text' value={username} onChange={this.handelUsernameChange} />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={comment} onChange={this.handelChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handelChangetopic}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submitted</button>
            </form>

        )
    }
}

export default Forms
