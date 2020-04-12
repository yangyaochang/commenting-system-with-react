import React, { Component } from 'react'
import PropTypes from '../../../node_modules/prop-types'
import Comment from '../Comment'

export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        return(
            <div>
                {this.props.comments.map((comment, index) => 
                    <Comment 
                        comment = {comment} 
                        key = {index}
                        index = {index}
                        onDeleteComment = {this.handleDeleteComment.bind(this)}/>
                )}
            </div>
        )
    }
}