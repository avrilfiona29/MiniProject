import { useState } from "react";

function ClassroomUpload() {
  const [subject, setSubject] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    if (!subject) {
      alert("Please select a subject!");
      return;
    }
    alert(`Classroom photo uploaded for ${subject} (dummy action)`);
    // Here you will connect to backend API to send photo + subject
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Upload Classroom Photo</h3>
      <form style={styles.form} onSubmit={handleUpload}>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="Physics">Physics</option>
          <option value="CSE Lab">CSE Lab</option>
        </select>
        <input type="file" style={styles.input} />
        <button type="submit" style={styles.button}>
          Upload & Mark Attendance
        </button>
      </form>
    </div>
  );
}

const styles = {
  card: {
    background: "#FDFDFD",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
  },
  title: {
    color: "#6C63FF",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #DCD6F7",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#6C63FF",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ClassroomUpload;
