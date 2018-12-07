import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../../../actions/articlesActions';
import getItem from '../../../utils/getItem';
import { urls } from '../../../apiEndpoints';
import Story from './Story/Story';
import './Stories.scss';

class Stories extends Component {
  componentDidMount() {
    const user = getItem('user');
    const { username } = user;
    const { dispatch } = this.props;
    dispatch(getArticles(urls.USER_ARTICLES(username)));
  }

  render() {
    const { articles } = this.props;
    const allStories = articles.map(article => <Story article={article} key={article.slug} />);

    return (
      <div className="text-center Stories">
        <div className="all-stories mx-5 pl-5">{allStories}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ articlesReducer: { articles } }) => ({ articles });

export default connect(mapStateToProps)(Stories);
