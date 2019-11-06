import React, { Component } from "react";
import Aux from "../AUUX/Auxiliary.js";
import Modal from "../../UI/Modal/Modal.js";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
      reqInterceptor: null,
      resInterceptor: null,
    };

    componentWillMount() {
     this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
     this.resInterceptor = axios.interceptors.response.use(null, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount(){
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}></WrappedComponent>
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
