function StudentAttendanceList({ selectedSubject }) {
  // Dummy attendance data
  const dummyData = [
    { date: "2025-10-01", subject: "Maths", status: "Present" },
    { date: "2025-10-01", subject: "Physics", status: "Absent" },
    { date: "2025-10-02", subject: "CSE Lab", status: "Present" },
    { date: "2025-10-02", subject: "Maths", status: "Absent" },
  ];

  // Filter by selected subject
  const filteredData = selectedSubject
    ? dummyData.filter((item) => item.subject === selectedSubject)
    : dummyData;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>My Attendance</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, idx) => (
            <tr key={idx} style={styles.tr}>
              <td style={styles.td}>{item.date}</td>
              <td style={styles.td}>{item.subject}</td>
              <td
                style={{
                  ...styles.td,
                  color: item.status === "Present" ? "#4CAF50" : "#F44336",
                  fontWeight: "bold",
                }}
              >
                {item.status}
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
    background: "#FFFFFF",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    marginBottom: "25px",
  },
  title: {
    color: "#6C63FF",
    marginBottom: "15px",
    fontSize: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
    fontSize: "14px",
    color: "#4B4B6B",
  },
  th: {
    borderBottom: "2px solid #E0DFF5",
    padding: "12px",
    color: "#6C63FF",
    fontWeight: "600",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #F1F0F7",
  },
  tr: {
    transition: "background 0.2s",
  },
};

export default StudentAttendanceList;
