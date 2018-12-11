import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { urls } from '../../apiEndpoints';
import './Paginate.scss';
import { getArticles } from '../../actions/articlesActions';

class Paginate extends Component {
  handlePageChange = data => {
    let { selected } = data;
    const limit = 10;
    let offset = selected * limit;
    this.props.dispatch(getArticles(urls.ARTICLES_PAGINATE(limit, offset)));
  };

  render() {
    let { articlesCount } = this.props;
    articlesCount = Math.ceil(articlesCount / 10);
    return (
      <ReactPaginate
        previousLabel="<< prev"
        nextLabel="next >>"
        pageCount={articlesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
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

const mapStateToProps = ({ articlesReducer }) => {
  const { articlesCount, prev, next, dispatch } = articlesReducer;
  return { articlesCount, prev, next, dispatch };
};

export default connect(mapStateToProps)(Paginate);
