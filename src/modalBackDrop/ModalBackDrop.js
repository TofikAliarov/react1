import React from "react";
import styles from "./modalBackDrop.module.css";

const modalBackDrop = (WrappedComponent) => {
  return class ModalBackDrop extends React.Component {
    state = {
      isOpen: false,
    };

    componentDidMount() {
      this.setState({ isOpen: true });
      window.addEventListener("keydown", this.closeModalKeydown);
      document.addEventListener("click", this.closeModalOverlay);
      document.styleSheets.overflow = "hidden";
    }

    componentWillUnmount() {
      window.removeEventListener("keydown", this.closeModalKeydown);
      document.removeEventListener("click", this.closeModalOverlay);
      document.styleSheets.overflow = "auto";
    }

    closeModal = () => {
      this.props.close();
    };

    closeModalKeydown = (evt) => {
      if (evt.code === "Escape") {
        this.closeModal();
      }
    };

    closeModalOverlay = (evt) => {
      if (evt.target.dataset.type === "modal") {
        this.closeModal();
      }
    };
    render() {
      return (
        <div data-type="modal" className={styles.modal}>
          <WrappedComponent {...this.props} onClick={this.closeModal} />
        </div>
      );
    }
  };
};

export default modalBackDrop;
