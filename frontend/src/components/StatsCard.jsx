function StatsCard({
  title,
  count
}) {

  return (

    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        marginBottom: "10px",
        width: "250px"
      }}
    >

      <h3>{title}</h3>

      <h2>{count}</h2>

    </div>
  );
}

export default StatsCard;