import "./App.css";
import NavBar from "./components/Navbar";
import TableList from "./components/TableList";
import { useState } from "react";
import ModalForm from "./components/ModalForm";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleOpen = (mode, client) => {
    setIsOpen(true);
    setClientData(client);
    setModalMode(mode);
  };

  const handleSubmit = async (newClientData) => {
    if (modalMode === "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/clients",
          newClientData
        );
        console.log("Client added:", response.data);
        setRefreshTrigger((prev) => prev + 1);
      } catch (error) {
        console.error("Error adding client:", error);
      }
      console.log("modal mode Add");
    } else {
      console.log("modal mode Edit");
      console.log("Updating client wit ID:", clientData.id);
      try {
        const response = await axios.put(
          `http://localhost:3000/api/clients/${clientData.id}`,
          newClientData
        );
        console.log("Client updated:", response.data);
        setRefreshTrigger((prev) => prev + 1);
      } catch (error) {
        console.error("Error updating client:", error);
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <TableList
        handleOpen={handleOpen}
        searchTerm={searchTerm}
        refreshTrigger={refreshTrigger}
      />
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
        clientData={clientData}
      />
    </>
  );
}

export default App;
