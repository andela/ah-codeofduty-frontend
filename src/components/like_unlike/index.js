import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dislikesArticle, likesArticle } from './actions';
import './main.scss';

class LikesDislikes extends Component {
  state = {
    likes: null,
  };
  handleLikeClick = e => {
    this.setState({ likes: true }, () => {
      this.props.likesArticle('new-car', this.state);
    });
  };
  handleDislikeClick = e => {
    this.setState({ likes: false }, () => {
      this.props.dislikesArticle('new-car', this.state);
    });
  };

  render() {
    const likeError = this.props.likeDislike.errors
      ? this.props.likeDislike.errors.data.detail
      : '';
    return (
      <>
        <button
          type="button"
          className="btn btn-default btn-responsive up_button"
          onClick={this.handleLikeClick}
        >
          <i class="fa fa-thumbs-up fa-2x" id="thumbsup" />
        </button>

        <button
          type="button"
          className="btn btn-default btn-responsive up_button"
          onClick={this.handleDislikeClick}
        >
          <i className="fa fa-thumbs-down fa-2x" id="thumbsdown" />
        </button>
        <p className="text-danger">{likeError}</p>
      </>
    );
  }
}

const mapStateToProps = state => ({
  likeDislike: state.likeDislikeReducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dislikesArticle,
      likesArticle,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LikesDislikes);
