import { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard({ rollNumber }) {
  const [student, setStudent] = useState(null);
  const [absence, setAbsence] = useState({ date: "", reason: "" });

  // Fetch student data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/students/`)
      .then((res) => {
        const found = res.data.find((s) => s.rollNumber === rollNumber);
        setStudent(found);
      });
  }, [rollNumber]);

  const handleAbsence = async () => {
    await axios.post(`http://localhost:5000/api/students/${rollNumber}/absence`, absence);
    setAbsence({ date: "", reason: "" });
    window.location.reload();
  };

  if (!student) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-xl space-y-4">
      <h2 className="text-2xl font-bold text-center">Welcome, {student.name}</h2>
      <p>Roll Number: {student.rollNumber}</p>
      <p>Balance: ₹{student.balance}</p>

      <div className="border-t pt-4">
        <h3 className="font-semibold">Raise Absence Request</h3>
        <input
          type="date"
          value={absence.date}
          onChange={(e) => setAbsence({ ...absence, date: e.target.value })}
          className="border p-1 m-1"
        />
        <input
          type="text"
          placeholder="Reason"
          value={absence.reason}
          onChange={(e) => setAbsence({ ...absence, reason: e.target.value })}
          className="border p-1 m-1"
        />
        <button
          onClick={handleAbsence}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Submit
        </button>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-semibold">Past Absence Requests:</h4>
        <ul className="list-disc list-inside">
          {student.absenceRequests?.map((a, i) => (
            <li key={i}>
              {new Date(a.date).toDateString()} — {a.reason}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t pt-4">
        <h4 className="font-semibold">Extra Items Taken:</h4>
        <ul className="list-disc list-inside">
          {student.extraItems?.map((e, i) => (
            <li key={i}>
              {e.itemName} — ₹{e.price} on{" "}
              {new Date(e.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentDashboard;
