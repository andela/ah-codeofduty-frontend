import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import authUser from  '../../utils/authUser';
import {
    postComment,
    getComment,
} from  './CommentsThunk'
import { connect } from 'react-redux';
import AllComments from './AllComments'
import PostReply from  './PostReply';

const {username} =  authUser()

class Commenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: '', author: {}};

    }

    onChange = (event) => {
        this.setState({ body: event.target.value, author: {username}})
    }

    onSubmit = () => {
        this.props.postComment(this.props.slug, this.state)
    }
    render() {
        return (
            <React.Fragment>
                <div class="container p-3 mb-2">
                <h4 className="ml-5">Comments</h4>
                <br/>
                    <div class="row">
                        <div class="col-md-2 text-center">
                            <i class="fas fa-comment-alt pr-4 pb-3 p-2 pl-4 pt-3 border-2 border-bottom border-warning"
                                data-toggle="collapse" data-target="#comments">
                                <sub class="pl-1 medium"></sub></i>
                        </div>
                        <div className="mt-1 col-md-10" id="add-comment">
                            <input class="ml-3" type="text" placeholder="Your comment ..." onChange={this.onChange} required></input>
                            <button onClick={this.onSubmit} class="btn btn-warning ml-5 mt-2 p-2 px-2 mb-3" data-show="collapse" data-target="#comments">Post<i class="ml-2 fa fa-paper-plane" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const matchDispatchToProps = dispatch =>
    bindActionCreators(
        {
            postComment,
        },
        dispatch,
    );

export default connect(null, matchDispatchToProps)(Commenter)