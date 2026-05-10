function ContractsTable({
  contracts,
  deleteContract,
  editContract
}) {

  if (contracts.length === 0) {
    return <p>No contracts found</p>;
  }

  return (

    <table border="1" cellPadding="10">

      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Risk</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {contracts.map((contract) => (

          <tr key={contract.id}>

            <td>{contract.id}</td>

            <td>{contract.title}</td>

            <td>{contract.risk}</td>

            <td>

              <button
                onClick={() => editContract(contract)}
              >
                Edit
              </button>

              {" "}

              <button
                onClick={() => deleteContract(contract.id)}
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default ContractsTable;