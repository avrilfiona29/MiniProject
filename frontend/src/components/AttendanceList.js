function AttendanceList() {
  const dummyData = [
    { usn: "CSE001", name: "Alice", date: "2025-10-01", subject: "Maths", status: "Present" },
    { usn: "CSE002", name: "Bob", date: "2025-10-01", subject: "Maths", status: "Absent" },
    { usn: "CSE003", name: "Charlie", date: "2025-10-01", subject: "Physics", status: "Present" },
  ];

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Attendance List</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>USN</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((student, idx) => (
            <tr key={idx} style={styles.tr}>
              <td style={styles.td}>{student.usn}</td>
              <td style={styles.td}>{student.name}</td>
              <td style={styles.td}>{student.date}</td>
              <td style={styles.td}>{student.subject}</td>
              <td
                style={{
                  ...styles.td,
                  color: student.status === "Present" ? "#4CAF50" : "#F44336",
                  fontWeight: "bold",
                }}
              >
                {student.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
  },
  th: {
    borderBottom: "2px solid #DCD6F7",
    padding: "10px",
    color: "#6C63FF",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #EDEDED",
  },
  tr: {
    transition: "background 0.2s",
  },
};

export default AttendanceList;
