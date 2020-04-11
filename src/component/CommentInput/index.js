import React, { Component } from 'react'

export default class CommentInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'Who are you?',
            comment: 'What\'s on your mind?'
        }
    }

    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const {userName, comment} = this.state
            this.props.onSubmit({userName, comment})
        }
        this.setState({
            comment: 'What\'s on your mind?'
        })
    }

    render() {
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>User Name: </span>
                        <div className='comment-field-input'>
                            {/* The value attribute specifies the value of an <input> element. 
                            For "text", "password", and "hidden" - it defines the initial (default) value of the input field. */}
                            <input type = 'text' value = {this.state.userName} onChange = {this.handleUserNameChange.bind(this)}/>
                        </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>Comment: </span>
                    <div className='comment-field-input'>
                        <textarea type = 'text' value = {this.state.comment} onChange = {this.handleCommentChange.bind(this)}/>
                    </div>
                </div>

                <div className='comment-field-button'>
                    <button onClick = {this.handleSubmit.bind(this)}>
                        Post
                    </button>
                </div>
            </div>
        )
    }
}