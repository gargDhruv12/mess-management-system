import { useState, useEffect } from "react";
import axios from "axios";

function AdminPanel() {
  const [rollNumber, setRollNumber] = useState("");
  const [student, setStudent] = useState(null);
  const [extra, setExtra] = useState({ itemName: "", price: "" });

  const fetchStudent = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students/");
      const found = res.data.find((s) => s.rollNumber === rollNumber);
      setStudent(found || null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddExtra = async () => {
    try {
      await axios.post(`http://localhost:5000/api/students/${rollNumber}/extra`, {
        ...extra,
        date: new Date().toISOString(),
      });
      setExtra({ itemName: "", price: "" });
      fetchStudent(); // refresh student data
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-center">Admin Panel</h2>

      <div className="space-y-2">
        <label className="block font-semibold">Enter Student Roll Number</label>
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          onClick={fetchStudent}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search Student
        </button>
      </div>

      {student ? (
        <div className="space-y-4 border-t pt-4">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Balance:</strong> ₹{student.balance}</p>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Add Extra Item</h3>
            <input
              type="text"
              placeholder="Item Name"
              value={extra.itemName}
              onChange={(e) => setExtra({ ...extra, itemName: e.target.value })}
              className="border p-2 w-full rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={extra.price}
              onChange={(e) => setExtra({ ...extra, price: e.target.value })}
              className="border p-2 w-full rounded"
            />
            <button
              onClick={handleAddExtra}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Extra Item
            </button>
          </div>

          <div className="pt-4">
            <h4 className="font-semibold mb-1">Extras Taken:</h4>
            <ul className="list-disc list-inside">
              {student.extraItems?.map((e, i) => (
                <li key={i}>
                  {e.itemName} — ₹{e.price} on {new Date(e.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AdminPanel;
