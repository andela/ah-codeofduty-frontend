import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchArticles } from './articleActions';
import ArticlesList from './articleList';
import Paginate from '../Paginate/Paginate';
import { urls } from '../../apiEndpoints';

export class Articles extends Component {
  componentDidMount() {
    const { dispatch, userURL } = this.props;
    let url;
    
    if (Boolean(userURL)) {
      console.log("I am the user")
      url = userURL
    } else {
      url = urls.ARTICLES
    }
    dispatch(fetchArticles(url));
  }

  render() {
    const { articlesPayload, userURL } = this.props;

    let user=null;
    if (Boolean(userURL)) {
      user = "user"
    }

    const paginate = articlesPayload.length ? <Paginate user={user}/> : null;

    return (
      <div>
        {articlesPayload && articlesPayload.length > 0
                && <ArticlesList articles={articlesPayload} />
                }
        {paginate}
      
      </div>
    );
  }
}

const mapStateToProps = ( {articleReducer: {articlesPayload}}) => ({ articlesPayload });

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articlesPayload: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Articles);
