function ContractsPage() {

  const contracts = [
    {
      id: 1,
      title: "Employment Agreement",
      risk: "Low"
    },
    {
      id: 2,
      title: "Vendor Contract",
      risk: "High"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contracts List</h1>

      {contracts.length === 0 ? (
        <p>No contracts found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Risk</th>
            </tr>
          </thead>

          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id}>
                <td>{contract.id}</td>
                <td>{contract.title}</td>
                <td>{contract.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContractsPage;