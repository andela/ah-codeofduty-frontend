import React, { Component } from 'react';
import { connect } from 'react-redux';

import Featured from './featuredBlog';
import ArticlesList from '../Articles/articleList';
import Aux from '../../hoc/Aux';
import {fetchRecentArticles, fetchPopularArticles} from './actions';
import {Footer} from "../Footer/Footer";

import './Home.scss';

export class Home extends Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchRecentArticles());
    dispatch(fetchPopularArticles());
  }

  render () {
    const {recentArticles, popularArticles} = this.props;
    return(
    <Aux>
      <Featured article={popularArticles[0]}/>
      <hr/>
      <div className="container mb-4">
        <h3 id="recent">Most Recent</h3>
        <ArticlesList articles={recentArticles} articlesClass="homeArticles" />
        <h3 id="popular">Most popular</h3>
        <ArticlesList articles={popularArticles} articlesClass="homeArticles" />
      </div>
      <Footer/>
    </Aux>
    )
  }
}

const mapStateToProps = ({ homeReducer: {recentArticles, popularArticles}, dispatch }) => ({recentArticles, popularArticles, dispatch})

export default connect(mapStateToProps)(Home);
