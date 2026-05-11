function Modal({
  contract,
  closeModal
}) {

  if (!contract) {
    return null;
  }

  return (

    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)"
      }}
    >

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          width: "300px",
          margin: "100px auto"
        }}
      >

        <h2>Contract Details</h2>

        <p>
          <strong>ID:</strong> {contract.id}
        </p>

        <p>
          <strong>Title:</strong> {contract.title}
        </p>

        <p>
          <strong>Risk:</strong> {contract.risk}
        </p>

        <button onClick={closeModal}>
          Close
        </button>

      </div>

    </div>
  );
}

export default Modal;