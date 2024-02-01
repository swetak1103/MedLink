import React from "react";

const ErrorElement = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! Something went wrong</h1>
      <p style={styles.message}>We encountered an error while processing your request.</p>
      {/* <img src="path/to/error-image.png" alt="Error" style={styles.image} /> */}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8d7da", // Light red background color
    border: "1px solid #dc3545", // Red border
    borderRadius: "5px",
    margin: "20px",
  },
  title: {
    color: "#721c24", // Dark red text color
  },
  message: {
    color: "#721c24", // Dark red text color
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginTop: "10px",
  },
};

export default ErrorElement;
