import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../../../actions/articlesActions';
import authUser from '../../../utils/authUser';
import { urls } from '../../../apiEndpoints';
import Story from './Story/Story';
import './Stories.scss';

class Stories extends Component {
  componentDidMount() {
    const user = authUser();
    const { username } = user;
    const { dispatch } = this.props;
    // dispatch(getArticles(urls.USER_ARTICLES(username)));
    dispatch(getArticles(urls.ARTICLES));
  }

  render() {
    const { articles } = this.props;
    console.log('myarticles', articles);
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
