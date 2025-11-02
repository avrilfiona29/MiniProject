function StudentForm() {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Add New Student</h3>
      <form style={styles.form}>
        <input type="text" placeholder="Student Name" style={styles.input} />
        <input type="file" style={styles.input} />
        <button type="submit" style={styles.button}>Add Student</button>
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

export default StudentForm;
