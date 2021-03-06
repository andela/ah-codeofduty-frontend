import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookmarkArticles from "./index";
import { bookmarkArticle } from "./actions/actions";

class BookmarkArticle extends Component {
  constructor(props) {
    super(props);
    this.slug = localStorage.getItem("currentArticle");
    this.state = {
      boookmarks: ""
    };
  }

  handleBookmark = () => {
    this.props.bookmark(this.slug);
    this.setState({
      bookmarks: true
    });
  };

  render() {
    const { bookmarks } = this.state;
    return (
      <BookmarkArticles
        onBookmarkClick={this.handleBookmark}
        bookmark={bookmarks}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ bookmark: bookmarkArticle }, dispatch);

const mapStateToProps = state => ({
  bookmarks: state.bookmarkReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkArticle);
