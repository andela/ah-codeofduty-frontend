import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
    postReply,
} from  './CommentsThunk'
import { connect } from 'react-redux';

class PostReply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: ''};

    }

    onChange = (event) => {
        this.setState({ body: event.target.value })
    }

    onSubmit = () => {
        this.props.postReply(this.props.slug, this.props.commentId, this.state)
        console.log(this.state, 'reply state>>>>>>>>>>>>')
    }
    render() {
        return (
            <React.Fragment>
                    <input type="text" onChange={this.onChange}></input>
                <button onClick={this.onSubmit} class="btn btn-warning ml-3 p-2 px-2 reply">Reply<i class="ml-2 fa fa-paper-plane"
                                    aria-hidden="true"></i></button>
            </React.Fragment>
        );
    }
}

const matchDispatchToProps = dispatch =>
    bindActionCreators(
        {
            postReply,
        },
        dispatch,
    );

export default connect(null, matchDispatchToProps)(PostReply)