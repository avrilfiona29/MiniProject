import StudentForm from "../components/StudentForm";
import ClassroomUpload from "../components/ClassroomUpload";
import AttendanceList from "../components/AttendanceList";
import ReportViewer from "../components/ReportViewer";

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Add Student</h2>
        <StudentForm />
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Upload Classroom Photo</h2>
        <ClassroomUpload />
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Attendance List</h2>
        <AttendanceList />
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Reports</h2>
        <ReportViewer />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#FBE7C6", // pastel background
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    color: "#6C63FF",
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    background: "#FFFFFF",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    marginBottom: "25px",
  },
  sectionTitle: {
    color: "#6C63FF",
    marginBottom: "15px",
  },
};

export default AdminDashboard;
