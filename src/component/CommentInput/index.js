import React, { Component } from 'react'

export default class CommentInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'Who are you?',
            comment: 'What\'s on your mind?'
        }
    }

    componentWillMount() {
        this._loadUserName()
    }

    componentDidMount() {
        this.textareaRef.focus()
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
            this.props.onSubmit({
                userName: this.state.userName,
                comment: this.state.comment,
                commentedTime: +new Date()
                // Date()
            })
        }
        this.setState({
            comment: 'What\'s on your mind?'
        })
    }

    handleUserNameBlur(event) {
        this._saveUserName(event.target.value)
    }

    // Use single underscore for private method
    _saveUserName(userName) {
        // Windoe.localStorage
        localStorage.setItem('userName', userName)
    }

    _loadUserName() {
        const userName = localStorage.getItem('userName')
        if (userName) {
            this.setState({
                userName
            })
        }
    }

    render() {
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>User Name: </span>
                        <div className='comment-field-input'>
                            {/* The value attribute specifies the value of an <input> element. 
                            For "text", "password", and "hidden" - it defines the initial (default) value of the input field. */}
                            <input 
                                type = 'text' 
                                value = {this.state.userName} 
                                onChange = {this.handleUserNameChange.bind(this)}
                                onBlur = {this.handleUserNameBlur.bind(this)}/>
                        </div>
                </div>

                <div className='comment-field'>
                    <span className='comment-field-name'>Comment: </span>
                    <div className='comment-field-input'>
                        <textarea 
                            type = 'text' 
                            value = {this.state.comment}
                            ref = {(textarea) => {this.textareaRef = textarea}}
                            onChange = {this.handleCommentChange.bind(this)}/>
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