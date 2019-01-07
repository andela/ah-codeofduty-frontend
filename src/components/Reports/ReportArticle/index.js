import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    postReport,
} from  './thunk'

import Modal from '../../Modal/Modal';
import Button from '../../Profile/Button';
import reportArticle from './ReportArticle.scss';

class ReportArticle extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {body: ''};

      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);

      this.state = {
        show: false
      };
    }

  onChange = (event) => {
      this.setState({ body: event.target.value})
  }

  onSubmit = (event) => {
      event.preventDefault()
      this.props.postReport(this.props.slug, this.state)
      this.setState({ show: false });
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
      console.log('anything')
      this.setState({ show: true });
    }

    render() {
      return (
        <div className="container">

          <button className="btn-warning" onClick={this.handleShow}>
           Report article
          </button>

          <Modal cancel={this.handleClose} show={this.state.show}>
          <form className="report-form" id="reportForm">
                <div className="form-group">
                </div>
                  <div className="form-group">
                    <div className="input-group">
                        <textarea className="form-control" id="report-form" placeholder="write your complaint on this article here..." required type="text" onChange={this.onChange} value={this.state.feedback}/>
                    </div>
                    </div>
                    <div className="form-group">
                        <button type="submit"className="btn btn-warning btn-block report-btn" onClick={this.onSubmit}>Report</button>
                    </div>
                    <div className="hint-text small">{" "}
                    </div>
                </form>
                <Button className="btn-warning btn-lg" clicked={this.handleClose}>Close</Button>
          </Modal>
        </div>
      );
    }
  }
  const matchDispatchToProps = dispatch =>
    bindActionCreators(
        {
          postReport,
        },
        dispatch,
    );

export default connect(null, matchDispatchToProps)(ReportArticle);
export {ReportArticle as ReportArticleTest};