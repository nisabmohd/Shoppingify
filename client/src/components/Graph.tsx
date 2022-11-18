import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";

export function Graph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
  );

  const data = {
    labels: ["January", "Febuary", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Items",
        data: [5, 7, 10, 8, 5, 6, 4],
        borderColor: "#F9A109",
        backgroundColor: "white",
      },
    ],
  };
  return (
    <Line
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
}
