function RecentContracts({
  contracts
}) {

  return (

    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "20px"
      }}
    >

      <h2>
        Recent Contracts
      </h2>

      {contracts.length === 0 ? (

        <p>No recent contracts</p>

      ) : (

        <ul>

          {contracts.map((contract) => (

            <li key={contract.id}>

              {contract.title}
              {" - "}
              {contract.risk}

            </li>

          ))}

        </ul>

      )}

    </div>
  );
}

export default RecentContracts;