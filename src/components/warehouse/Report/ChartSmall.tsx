import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

interface DataItem {
  name: string;
  weight: number;
}

interface ChartProps {
  data: DataItem[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="flex justify-center gap-10 items-center max-md:flex-col">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="weight"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      <BarChart
        width={375}
        height={500}
        data={data}
        margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="weight" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
};

export default Chart;
