import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ReportViewer() {
  // Dummy data: subjects on x-axis
  const data = {
    labels: ["Maths", "Physics", "CSE Lab"],
    datasets: [
      {
        label: "Attendance (%)",
        data: [90, 70, 100],
        backgroundColor: "#6C63FF",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Attendance Report (Subject-wise)" },
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Attendance Report</h3>
      <Bar data={data} options={options} />
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
};

export default ReportViewer;
