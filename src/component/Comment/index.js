import React, { Component } from 'react'

export default class Comment extends Component {
    render () {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.userName} </span>：
                </div>
                <p>{this.props.comment.comment}</p>
            </div>
        )
    }
}
