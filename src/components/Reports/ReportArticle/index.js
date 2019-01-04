import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    postReport,
} from  './thunk'

// import Modal from '../../Modal/Modal';
// import Button from '../../Profile/Button';
import {
    Popover,
    Tooltip,
    Button,
    Modal,
} from 'react-bootstrap';
class ReportArticle extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {body: ''};

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

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
      this.setState({ show: true });
    }

    render() {
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

      return (
        <div className="container">

          <Button className="btn-warning" bsSize="large" onClick={this.handleShow}>
           Report article
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Report this article</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="report-form" id="reportForm">
                <div className="form-group">
                </div>
                  <div className="form-group">
                    <div className="input-group">
                        <textarea className="form-control" placeholder="write your complaint on this article here..." required type="text" id="report-body" onChange={this.onChange} value={this.state.feedback}/>
                    </div>
                    </div>
                    <div className="form-group">
                        <button type="submit"className="btn btn-warning btn-block report-btn" onClick={this.onSubmit}>Report</button>
                    </div>
                    <div className="hint-text small">{" "}
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-warning" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
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