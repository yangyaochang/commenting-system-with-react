import React, { Component } from 'react'
import CommentInput from '../CommentInput'
import CommentList from '../CommentList'
import './index.css'

export default class ComponentApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComments()
    }

    _loadComments() {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({
                comments
            })
        }
    }

    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitComment(comment) {
        if (!comment) {return alert('You haven\'t enter anything')}
        if (!comment.userName) {return alert('Please enter user name')}
        if (!comment.comment) {return alert('Please enter your comment')} 

        const comments = this.state.comments
        comments.push(comment)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }

    render() {
        return(
            <div className = 'wrapper'>
                <CommentInput onSubmit = {this.handleSubmitComment.bind(this)}/>
                <CommentList comments = {this.state.comments}/>
            </div>
        )
    }
}