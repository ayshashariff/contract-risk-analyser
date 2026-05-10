function DashboardPage() {

  return (

    <div style={{ padding: "20px" }}>

      <h1>Contract Risk Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px"
        }}
      >

        <div
          style={{
            padding: "20px",
            backgroundColor: "#f2f2f2",
            width: "200px"
          }}
        >
          <h2>Total Contracts</h2>
          <p>25</p>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffe5e5",
            width: "200px"
          }}
        >
          <h2>High Risk</h2>
          <p>5</p>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#e5ffe5",
            width: "200px"
          }}
        >
          <h2>Low Risk</h2>
          <p>20</p>
        </div>

      </div>

    </div>
  );
}

export default DashboardPage;