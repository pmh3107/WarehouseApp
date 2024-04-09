import React from "react";
import Chart from "./Chart";
import ChartSmall from "./ChartSmall";
type Report = {};

export const Report: React.FC<Report> = (props) => {
  const DataItem = [
    {
      name: "Nhập kho",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Xuất kho",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Tồn kho",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
  ];
  const data = [
    { name: "Nhập kho", weight: 2000 },
    { name: "Xuất kho", weight: 15000 },
    { name: "Tồn kho", weight: 1000 },
  ];
  return (
    <div className="flex flex-col gap-4 items-center p-10 max-md:p-1 ">
      <p className="text-2xl font-semibold ">Biểu đồ tổng hợp </p>
      <Chart data={DataItem} />
      <p className="text-2xl font-semibold mt-10">Biểu đồ nhánh </p>
      <ChartSmall data={data} />
    </div>
  );
};
