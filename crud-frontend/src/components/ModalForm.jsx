import { useEffect, useState } from "react";

const ModalForm = ({ isOpen, onClose, onSubmit, mode, clientData }) => {
  const [rate, setRate] = useState(0);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const clientData = {
        name,
        email,
        job,
        rate: Number(rate),
        isactive: status,
      };
      await onSubmit(clientData);
    } catch (error) {
      console.error("Error adding client:", error);
    }
    onClose();
  };

  useEffect(() => {
    if (mode === "edit" && clientData) {
      setName(clientData.name || "");
      setEmail(clientData.email || "");
      setJob(clientData.job || "");
      setRate(clientData.rate || 0);
      setStatus(clientData.isactive || false);
    } else {
      setName("");
      setEmail("");
      setJob(""); 
      setRate(0);
      setStatus(false);
    } 
  }, [mode, clientData]);

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Clent Details"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered my-4 flex items-center gap-2 w-full">
              Name
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2 w-full">
              Email
              <input
                type="text"
                className="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered my-4 flex items-center gap-2 w-full">
              Job
              <input
                type="text"
                className="grow"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>

            <div className="flex mb-4 justify-between">
              <label className="input input-bordered mr-4 my-4 flex items-center gap-2">
                Rate
                <input
                  type="number"
                  className="grow"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>
              <select
                value={status ? "Active" : "Inactive"}
                className="select my-4"
                onChange={handleStatusChange}
              >
                <option>Inactive</option>
                <option>Active</option>
              </select>
            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <button className="btn btn-success ">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
