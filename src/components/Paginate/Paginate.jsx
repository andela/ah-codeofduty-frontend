import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { urls } from '../../apiEndpoints';
import './Paginate.scss';
import { fetchArticles } from '../Articles/articleActions';
import authUser from '../../utils/authUser';

export class Paginate extends Component {
  handlePageChange = data => {
    let { selected } = data;
    const limit = 12;
    let offset = selected * limit;
    let url;
    const {username} = authUser();
    const { isUser } = this.props;
    if (Boolean(isUser)) {
      url = urls.USER_ARTICLES_PAGINATE(limit, offset, username);
    } else {
      url = urls.ARTICLES_PAGINATE(limit, offset);
    }
    this.props.dispatch(fetchArticles(url));
  };

  render() {
    let { articlesCount } = this.props;
    articlesCount = Math.ceil(articlesCount / 12);
    return (
      <ReactPaginate
        previousLabel="<< prev"
        nextLabel="next >>"
        pageCount={articlesCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={this.handlePageChange}
        containerClassName="pagination"
        pageClassName="pages"
        activeClassName="active-page"
        initialPage={0}
        previousClassName="prev"
        nextClassName="next"
      />
    );
  }
}

const mapStateToProps = ({ articleReducer: {articlesCount, dispatch} }) => ({ articlesCount, dispatch });


export default connect(mapStateToProps)(Paginate);
