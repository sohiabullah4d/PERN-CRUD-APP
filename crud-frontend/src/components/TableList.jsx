import { useEffect, useState } from "react";
import axios from "axios";

const TableList = ({ handleOpen, searchTerm, refreshTrigger }) => {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/clients");
        setTableData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [refreshTrigger]);

  const filteredData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        setTableData(tableData.filter((client) => client.id !== id));
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {filteredData.map((client) => (
              <tr key={client.id}>
                <th>{client.id}</th>
                <th>{client.name}</th>
                <th>{client.email}</th>
                <th>{client.job}</th>
                <th>{client.rate}</th>
                <th
                  className={`btn rounded-full w-20 mt-3 ${
                    client.isactive ? "btn-primary" : "btn-outline-primary"
                  }`}
                >
                  {client.isactive ? "Active" : "Inactive"}
                </th>
                <th>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleOpen("edit", client)}
                  >
                    Update
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-accent"
                    onClick={() => handleDelete(client.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
