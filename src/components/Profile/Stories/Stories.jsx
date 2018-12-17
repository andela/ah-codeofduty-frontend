import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../../../actions/articlesActions';
import authUser from '../../../utils/authUser';
import { urls } from '../../../apiEndpoints';
import Story from './Story/Story';
import Paginate from '../../Paginate/Paginate';
import './Stories.scss';

class Stories extends Component {
  componentDidMount() {
    const user = authUser();
    const { username } = user;
    const { dispatch } = this.props;
    dispatch(getArticles(urls.USER_ARTICLES(username)));
  }

  render() {
    const { articles } = this.props;
    const user = authUser();
    const { username } = user;
    const allStories = articles.map(article => <Story article={article} key={article.slug} />);
    const paginate = articles.length ? <Paginate user={username} /> : null;
    

    return (
      <div className="text-center Stories">
        <div className="all-stories mx-5 pl-5">{allStories}</div>
        {paginate}
      </div>
    );
  }
}

const mapStateToProps = ({ articlesReducer: { articles } }) => ({ articles });

export default connect(mapStateToProps)(Stories);
