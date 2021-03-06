import React, { Component } from 'react'
import PropTypes from '../../../node_modules/prop-types'

export default class Comment extends Component {
    propTypes
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor(props) {
        super(props)
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this), 10000
        )
        // Update time string every 10 seconds
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.commentedTime) / 1000
        this.setState({
            timeString: (duration > 60) ? `${Math.round(duration / 60)} minutes ago` : `${Math.round(Math.max(duration, 1))} seconds ago`
        })
    }

    render () {
        return (
            <div className='comment'>
                <div className='comment-username'>
                    <span>{this.props.comment.userName} </span>：
                </div>
                <p>{this.props.comment.comment}</p>
                <span className = 'comment-commentedtime'>
                    {this.state.timeString}
                </span>
                <span className = 'comment-delete' onClick = {this.handleDeleteComment.bind(this)}>
                    Delete
                </span>
            </div>
        )
    }
}
