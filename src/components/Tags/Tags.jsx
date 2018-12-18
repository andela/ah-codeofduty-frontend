import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Profile/Button';
import { fetchArticles } from '../Articles/articleActions';
import { urls } from '../../apiEndpoints';
import './Tags.scss';

// To use this component pass in tags (as list) as props <Tags tags={tags}/>

class Tags extends Component {
  handleTags = tag => {
    const { dispatch } = this.props;
    dispatch(fetchArticles(urls.FILTER_BY_TAGS(tag)));
  };

  render() {
    const { tags } = this.props;
    const tagList = tags.map(tag => <Button clicked={() => this.handleTags(tag)}>{tag}</Button>);
    return <div className="Tags">{tagList}</div>;
  }
}

const mapStateToProps = ({ articleReducer: { dispatch } }) => {
  return { dispatch };
};
export default connect(mapStateToProps)(Tags);
