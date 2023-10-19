import React from "react";

const DeleteImageInUpdateModal = ({ index, removeImg }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "gray",
        top: "-10px",
        right: "10px",
        position: "absolute",
        color: "white",
        textAlign: "center",
        lineHeight: "17px",
        cursor: "pointer",
      }}
      onClick={() => removeImg(index)}
    >
      x
    </div>
  );
};

export default DeleteImageInUpdateModal;
