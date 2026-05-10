function RiskBadge({ risk }) {

  let color = "";

  if (risk === "High") {
    color = "red";
  }

  else if (risk === "Medium") {
    color = "orange";
  }

  else {
    color = "green";
  }

  return (

    <span
      style={{
        backgroundColor: color,
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px"
      }}
    >
      {risk}
    </span>

  );
}

export default RiskBadge;