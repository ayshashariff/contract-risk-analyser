import { useState } from "react";

function ContractsPage() {

  const [contracts, setContracts] = useState([
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
  ]);

  const [title, setTitle] = useState("");
  const [risk, setRisk] = useState("");
  const [search, setSearch] = useState("");

  const addContract = () => {

    if (!title || !risk) {
      alert("Please fill all fields");
      return;
    }

    const newContract = {
      id: contracts.length + 1,
      title,
      risk
    };

    setContracts([...contracts, newContract]);

    setTitle("");
    setRisk("");
  };

  const deleteContract = (id) => {
    const updatedContracts =
      contracts.filter((contract) => contract.id !== id);

    setContracts(updatedContracts);
  };

  const filteredContracts = contracts.filter((contract) =>
    contract.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>

      <h1>Contracts List</h1>

      <input
        type="text"
        placeholder="Search contracts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter contract title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter risk level"
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
      />

      <br /><br />

      <button onClick={addContract}>
        Add Contract
      </button>

      <br /><br />

      {filteredContracts.length === 0 ? (
        <p>No contracts found</p>
      ) : (
        <table border="1" cellPadding="10">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Risk</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredContracts.map((contract) => (

              <tr key={contract.id}>

                <td>{contract.id}</td>

                <td>{contract.title}</td>

                <td>{contract.risk}</td>

                <td>
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
      )}

    </div>
  );
}

export default ContractsPage;