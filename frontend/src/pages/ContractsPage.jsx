import { useState } from "react";
import ContractsTable from "../components/ContractsTable";

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

  const [editingId, setEditingId] = useState(null);

  const addOrUpdateContract = () => {

    if (!title || !risk) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {

      const updatedContracts = contracts.map((contract) =>

        contract.id === editingId
          ? { ...contract, title, risk }
          : contract

      );

      setContracts(updatedContracts);

      setEditingId(null);

    } else {

      const newContract = {
        id: contracts.length + 1,
        title,
        risk
      };

      setContracts([...contracts, newContract]);
    }

    setTitle("");
    setRisk("");
  };

  const deleteContract = (id) => {

    const updatedContracts =
      contracts.filter((contract) => contract.id !== id);

    setContracts(updatedContracts);
  };

  const editContract = (contract) => {

    setTitle(contract.title);
    setRisk(contract.risk);
    setEditingId(contract.id);
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

      <button onClick={addOrUpdateContract}>

        {editingId ? "Update Contract" : "Add Contract"}

      </button>

      <br /><br />

      <ContractsTable
        contracts={filteredContracts}
        deleteContract={deleteContract}
        editContract={editContract}
      />

    </div>
  );
}

export default ContractsPage;