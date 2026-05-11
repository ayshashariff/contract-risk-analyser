function Toast({ message }) {

  if (!message) {
    return null;
  }

  return (

    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "green",
        color: "white",
        padding: "15px",
        borderRadius: "5px"
      }}
    >

      {message}

    </div>

  );
}

export default Toast;