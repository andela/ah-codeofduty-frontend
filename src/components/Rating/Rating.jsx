import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StarRatings from "react-star-ratings";
import { rateArticle, avgRate } from "./actions/actions";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  changeRating = newRating => {
    this.props.addRating({
      rate: newRating,
      slug: localStorage.getItem("currentArticle")
    });
    this.setState({
      rating: newRating
    });
  };

  render() {
    return (
      <div>
        <h6>Rate this Article</h6>
        <StarRatings
          rating={this.state.rating}
          starHoverColor="gold"
          starRatedColor="gold"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="4px"
        />
        {/* <StarRatings
          rating={this.props.average_rating.average_rating}
          starDimension="20px"
          starSpacing="5px"
        /> */}
      </div>
    );
  }
}

// class averageRating extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rating: 0,
//       average_rating: 0
//     };
//   }

//   componentDidMount() {
//     this.props.ar("why-react");
//   }

//   render() {
//     return (
//       <div>
//         <StarRatings
//           rating={this.props.average_rating.average_rating}
//           starDimension="20px"
//           starSpacing="5px"
//         />
//       </div>
//     );
//   }
// }

const matchDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addRating: rateArticle
      // ar: avgRate
    },
    dispatch
  );

export default connect(
  null,
  matchDispatchToProps
)(Rating);
