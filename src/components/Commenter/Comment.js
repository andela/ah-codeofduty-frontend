import React from 'react';
import PropTypes from 'prop-types';
import {timeConverter} from '../../utils/timeConverter'

const propTypes = {};

const defaultProps = {};

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: ''};
    }

    onChange = (event) => {
        this.setState({ body: event.target.value })
    }

    onSubmit = () => {
        const { comment, reply, slug } = this.props;
        reply(slug, comment.id, this.state);
    }

    render() {
        const { comment } = this.props;
        return (
            <React.Fragment>

            <div class="p-3 mb-2">
                <hr/>
                <img class="avatar" src="../photos/profile.jpg"></img>
                <span class="pl-3 font-satisfy"><b>@commenter</b></span>
                <p class="pt-3">
                    {comment.body}
                </p>
                <p>Modified: <i>{timeConverter(comment.updated_at)}</i></p>

                <input class="" type="text" placeholder="Your Reply ..." onChange={this.onChange}></input>
                <button onClick={this.onSubmit} class="btn btn-warning ml-3 mt-2 p-2 px-2">Reply<i class="ml-2 fa fa-paper-plane"
                                    aria-hidden="true"></i></button>
                <div style={{paddingRight: '100px'}}>
                    {comment.thread.map(response => 
                    <React.Fragment>
                    <div class="ml-2 container mt-3 border-left border-warning">
                    <img class="small-avatar" src="../photos/profile.jpg"></img>
                    <span class="pr-2 font-satisfy"><b>@replier <span class="fa fa-angle-double-right"></span></b></span>
                    <span class="pt-3">{response.body}</span>
                    <br/>
                    <p>Modified: <i>{timeConverter(response.updated_at)}</i></p>
                    <br/>
                    </div>
                    </React.Fragment>)}
                </div>
                <hr/>
            </div>
            </React.Fragment>
        );
    }
}

 Comment.propTypes = propTypes;
 Comment.defaultProps = defaultProps;
