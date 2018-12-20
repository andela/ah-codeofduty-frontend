import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StarRatings from 'react-star-ratings';
import { avgRate } from './actions/actions';

class Average extends Component {
  constructor(props) {
    super(props);
    this.state = {
      average_rating: 0,
    };
  }

  componentDidMount() {
    // this.props.ar(localStorage.getItem("currentArticle"));
  }

  render() {
    return (
      <div>
        <StarRatings
          rating={this.props.average_rating.average_rating}
          starDimension="20px"
          starSpacing="5px"
        />
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => bindActionCreators(
    {
      ar: avgRate,
    },
    dispatch,
  );

const mapStateToProps = state => ({
  average_rating: state.ratingReducer,
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Average);
