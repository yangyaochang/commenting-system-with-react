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

    handleSubmitComment(comment) {
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
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