import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function StudentReportViewer({ selectedSubject }) {
  // Dummy subject-wise attendance percentages
  const allSubjects = ["Maths", "Physics", "CSE Lab"];
  const attendanceData = {
    Maths: 90,
    Physics: 70,
    "CSE Lab": 100,
  };

  // Filter by selected subject
  const labels = selectedSubject ? [selectedSubject] : allSubjects;

  const data = {
    labels,
    datasets: [
      {
        label: "Attendance (%)",
        data: labels.map((sub) => attendanceData[sub]),
        backgroundColor: "#6C63FF",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { color: "#4B4B6B", font: { size: 14 } } },
      title: { display: true, text: "My Attendance Report", color: "#6C63FF", font: { size: 18 } },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { color: "#4B4B6B", stepSize: 20 },
        grid: { color: "#EDEDF7" },
      },
      x: {
        ticks: { color: "#4B4B6B", font: { size: 14 } },
        grid: { display: false },
      },
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
};

export default StudentReportViewer;
