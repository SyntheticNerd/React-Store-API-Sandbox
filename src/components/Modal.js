import React from "react";
import ReactDOM from "react-dom";

const screenBlur = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  position: "absolute",
  top: "0px",
  zIndex: "2"
};

const modalDefaultStyle = {
  height: "95vh",
  width: "90vw",
  backgroundColor: "#1e1e1e",
  borderRadius: ".2em",
  zIndex: "3",
  overflowX: "hidden",
  position: "relative",
  margin: "auto"
};

const modalContainer = {
  display: "flex",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  top: "0px",
  left: "0px",
  justifyContent: "center",
  alignItems: "center"
};

class ModalClass extends React.Component {
  render() {
    return (
      <>
        {this.props.show && (
          <div style={modalContainer}>
            <div style={screenBlur} onClick={this.props.onClose}></div>
            <div style={modalDefaultStyle}>{this.props.children}</div>
          </div>
        )}
      </>
    );
  }
}

export default ModalClass;
