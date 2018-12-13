import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchArticles, fetchTags } from './articleActions';
import ArticlesList from './articleList';
import Paginate from '../Paginate/Paginate';
import Tags from '../Tags/Tags';
import { urls } from '../../apiEndpoints';

export class Articles extends Component {
  componentDidMount() {
    const { dispatch, userURL } = this.props;
    let url;

    if (userURL) {
      url = userURL;
    } else {
      url = urls.ARTICLES;
    }
    dispatch(fetchArticles(url));
    dispatch(fetchTags());
  }

  render() {
    const { articlesPayload, tags, userURL } = this.props;

    let isUser = null;
    if (userURL) {
      isUser = true;
    }

    const paginate = articlesPayload.length ? <Paginate isUser={isUser} /> : null;
    const allTags = tags.length ? <Tags tags={tags} /> : null;

    return (
      <div>
        {articlesPayload && articlesPayload.length > 0
                && <ArticlesList articles={articlesPayload} />
                }
        {paginate}
        {allTags}
      </div>
    );
  }
}

const mapStateToProps = ({ articleReducer: { articlesPayload, tags } }) => ({ articlesPayload, tags });

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articlesPayload: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Articles);
