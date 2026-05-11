import { useEffect, useState } from "react";
import ContractsTable from "../components/ContractsTable";
import LoadingSpinner from "../components/LoadingSpinner";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

function ContractsPage() {

  const [contracts, setContracts] = useState(() => {

    const savedContracts =
      localStorage.getItem("contracts");

    return savedContracts
      ? JSON.parse(savedContracts)
      : [
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
  });

  const [title, setTitle] = useState("");
  const [risk, setRisk] = useState("");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [selectedContract, setSelectedContract] = useState(null);

  const [toastMessage, setToastMessage] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {

    setTimeout(() => {

      setLoading(false);

    }, 2000);

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "contracts",
      JSON.stringify(contracts)
    );

  }, [contracts]);

  const addOrUpdateContract = () => {

    if (!title || !risk) {

      setError("Please fill all fields");

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
    setError("");

    setToastMessage("Contract saved successfully");

    setTimeout(() => {
      setToastMessage("");
    }, 3000);
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

  const viewContract = (contract) => {
    setSelectedContract(contract);
  };

  const closeModal = () => {
    setSelectedContract(null);
  };

  const exportContracts = () => {

    const dataStr =
      JSON.stringify(contracts, null, 2);

    const blob = new Blob(
      [dataStr],
      { type: "application/json" }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "contracts.json";

    link.click();
  };

  const importContracts = (event) => {

    const file =
      event.target.files[0];

    if (!file) {
      return;
    }

    const reader =
      new FileReader();

    reader.onload = (e) => {

      const importedContracts =
        JSON.parse(e.target.result);

      setContracts(importedContracts);

      setToastMessage(
        "Contracts imported successfully"
      );

      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    };

    reader.readAsText(file);
  };

  const filteredContracts = contracts.filter((contract) =>
    contract.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (

    <div style={{ padding: "20px" }}>

      <Toast message={toastMessage} />

      <h1>Contracts List</h1>

      {error && (

        <p style={{ color: "red" }}>
          {error}
        </p>

      )}

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

      {" "}

      <button onClick={exportContracts}>
        Export JSON
      </button>

      {" "}

      <input
        type="file"
        accept=".json"
        onChange={importContracts}
      />

      <br /><br />

      <ContractsTable
        contracts={filteredContracts}
        deleteContract={deleteContract}
        editContract={editContract}
        viewContract={viewContract}
      />

      <Modal
        contract={selectedContract}
        closeModal={closeModal}
      />

    </div>
  );
}

export default ContractsPage;