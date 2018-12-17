import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dislikesArticle, likesArticle } from './actions';
import './main.scss';

export class LikesDislikes extends Component {
  constructor(props){
    super(props);
    this.slug = localStorage.getItem('likeslug');
  }
  state = {
    likes: null,
  };
  
  handleLikeClick = e => {
    this.setState({ likes: true }, () => {
      const {slug} = this.props;
      this.props.likesArticle(this.slug, this.state);
    });
  };
  handleDislikeClick = e => {
    this.setState({ likes: false }, () => {
      this.props.dislikesArticle(this.slug, this.state);
    });
  };
  
  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-default btn-responsive up_button"
          id="up_button"
          onClick={this.handleLikeClick}
        >
          <i class="fa fa-thumbs-up fa-2x" id="thumbsup"></i>
        </button>

        <button
          type="button"
          className="btn btn-default btn-responsive up_button"
          onClick={this.handleDislikeClick}
        >
          <i className="fa fa-thumbs-down fa-2x" id="thumbsdown"></i>
        </button>
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
