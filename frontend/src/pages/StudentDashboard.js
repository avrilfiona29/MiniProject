import { useState } from "react";
import AttendanceList from "../components/StudentAttendanceList";
import ReportViewer from "../components/StudentReportViewer";

function StudentDashboard() {
  const [selectedSubject, setSelectedSubject] = useState("");

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome, Student</h2>

      {/* Subject Filter */}
      <div style={styles.filterContainer}>
        <label style={styles.label}>Filter by Subject:</label>
        <select
          style={styles.select}
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">All Subjects</option>
          <option value="Maths">Maths</option>
          <option value="Physics">Physics</option>
          <option value="CSE Lab">CSE Lab</option>
        </select>
      </div>

      {/* Attendance Table */}
      <AttendanceList selectedSubject={selectedSubject} />

      {/* Attendance Report */}
      <ReportViewer selectedSubject={selectedSubject} />
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#F5F7FA", // soft pastel background
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    color: "#6C63FF",
    marginBottom: "25px",
    fontSize: "28px",
  },
  filterContainer: {
    marginBottom: "25px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  label: {
    fontWeight: "600",
    color: "#4B4B6B",
    fontSize: "15px",
  },
  select: {
    padding: "10px 15px",
    borderRadius: "12px",
    border: "1px solid #DCD6F7",
    outline: "none",
    fontSize: "14px",
    background: "#FDFDFD",
    color: "#4B4B6B",
  },
};

export default StudentDashboard;
