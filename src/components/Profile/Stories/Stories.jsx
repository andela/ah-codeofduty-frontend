import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../../../actions/articlesActions';
import { urls } from '../../../apiEndpoints';
import Story from './Story/Story';
import './Stories.scss';

class Stories extends Component {
  componentDidMount() {
    // TODO get username from local storage
    const { dispatch } = this.props;
    dispatch(getArticles(urls.USER_ARTICLES('user')));
  }

  render() {
    const { articles } = this.props;
    const allStories = articles.map(article => <Story article={article} key={article.slug} />);

    return (
      <div className="text-centerStories">
        <div className="all-stories mx-5 pl-5">{allStories}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ articlesReducer: { articles } }) => ({ articles });

export default connect(mapStateToProps)(Stories);
