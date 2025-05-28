"use client";

import styles from "./chart.module.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "week 1",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "week 2",
    uv: 1500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "week 3",
    uv: 200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "week 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Statices</h2>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#BCC6CC" fill="#6A9C89" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
