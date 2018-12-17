import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchArticles } from './articleActions';
import ArticlesList from './articleList';

export class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articlesPayload } = this.props;

    return (
      <div>
        {articlesPayload && articlesPayload.length > 0
                && <ArticlesList articles={articlesPayload} />
                }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articlesPayload: state.articleReducer.articlesPayload,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchArticles,
}, dispatch);

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articlesPayload: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Articles);
