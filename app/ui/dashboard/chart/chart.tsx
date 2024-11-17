"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data based on the image provided
const data = [
  { name: "Nov", last6Months: 20, previous: 15 },
  { name: "Dec", last6Months: 40, previous: 30 },
  { name: "Jan", last6Months: 35, previous: 20 },
  { name: "Feb", last6Months: 50, previous: 25 },
  { name: "Mar", last6Months: 30, previous: 40 },
  { name: "Apr", last6Months: 60, previous: 30 },
  { name: "May", last6Months: 25, previous: 20 },
  { name: "Jun", last6Months: 40, previous: 50 },
  { name: "", last6Months: 50, previous: 60 },
];

import styles from "./chart.module.css";

function CustomTick({ x, y, payload, index }: any) {
  const offset = 45; // Move the label to the center between grid lines
  return (
    <text
      x={x + offset} // Adjust this to fine-tune centering
      y={y + 10} // Slight adjustment down for labels
      fill="rgba(24, 24, 25, 0.42)"
      fontSize="10"
      textAnchor="middle"
    >
      {payload.value}
    </text>
  );
}

export default function Chart() {
  return (
    <div className={styles.container}>
      <div className="flex justify-between items-baseline">
        <div>
          <p className={styles.summary}>Your work summary</p>
          <p className={styles.mounth}>Nov-July</p>
        </div>
        <div className="flex gap-8">
          <div className={`${styles.text_box} ${styles.circle_blue}`}>
            
            <p className={styles.title}>LAST 6 MOUNTHS</p>
            <p className={styles.price}>$8,620</p>
          </div>
          <div  className={styles.text_box}>
            <p className={styles.title}>LAST 6 MOUNTHS</p>
            <p className={styles.price}>$8,620</p>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%" className="pt-5 pr-2">
        <LineChart data={data}>
          <CartesianGrid horizontal={false} />
          <XAxis
            dataKey="name"
            // tick={{ fontSize: 12, fill: 'rgba(24, 24, 25, 0.42)'}}
            // padding={{ left: 25, right: 25 }}
            tickLine={false} // Hides the tick line
            axisLine={false} // Hides the axis line
            tick={<CustomTick />}
          />
          <YAxis
            width={20}
            domain={[0, 100]}
            tickLine={false} // Hides the tick line
            tick={{ fontSize: 12, fill: "rgba(24, 24, 25, 0.42)" }}
            strokeDasharray="5 5"
          />
          {/* <Tooltip />
          <Legend /> */}
          <Line
            type="monotone"
            dataKey="last6Months"
            stroke="#4A4DE6"
            strokeWidth={2}
            name="Last 6 Months"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#F0D961"
            strokeWidth={2}
            name="Previous"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
