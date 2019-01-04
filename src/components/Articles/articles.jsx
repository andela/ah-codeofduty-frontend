import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchArticles, fetchTags } from './articleActions';
import ArticlesList from './articleList';
import Paginate from '../Paginate/Paginate';
import Tags from '../Tags/Tags';
import { urls } from '../../apiEndpoints';
import './articles.scss';
import { Footer } from '../Footer/Footer';

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
    const allTags = articlesPayload.length && tags.length ? <Tags tags={tags} /> : null;

    return (
      <div>
        {/* consult on what this code does */}
        {articlesPayload && articlesPayload.length > 0
                && <ArticlesList articles={articlesPayload} />
                }
        {paginate}
        {allTags}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ articleReducer: { articlesPayload }, tagsReducer: { tags } }) => (
  { articlesPayload, tags }
);

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articlesPayload: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Articles);
