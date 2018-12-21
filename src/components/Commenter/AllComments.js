import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
    getComment,
    postReply,
} from  './CommentsThunk'
import Comment from './Comment';
import { connect } from 'react-redux';

class AllComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: ''};
    }

    componentDidMount() {
        console.log('aajdofuasdifa', this.props.slug)
        this.props.getComment(this.props.slug)
    }

    clickHere = () => {
    }
    render() {
        const { comments = [], postReply, slug } = this.props;
        return (
            <React.Fragment>
                <div class="container pl-5 comments p-4 font-raleway collapse show" id="comments">
                {comments.map((data) => <Comment comment={data} reply={postReply} slug={slug} />)}
                </div>
            </React.Fragment>
        );
    }
}

const matchDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getComment,
            postReply,
        },
        dispatch,
    );

const mapStateToProps = ({ commentReducer }) => commentReducer;

export default connect(mapStateToProps, matchDispatchToProps)(AllComments)