import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import PropType from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ userData }) => {
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 50,
      },
    },
  };

  return <Line options={options} data={userData} />;
};

LineGraph.propTypes = {
  userData: PropType.array,
};

export default LineGraph;
