"use client";
import styles from "./rate.module.css";
import "react-circular-progressbar/dist/styles.css";

import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators.js";
import Box from "../box/box";
interface satisfactionRate {
  satisfactionRate: number;
}
const Rate = ({ satisfactionRate }: satisfactionRate) => {
  // const satisfactionRate = 89.879; // Value in percentage

  return (
    <Box title={"Satisfaction rate"} des={"From all projects"}>
      <div className=" px-5 w-full h-[200px]  flex justify-center items-start overflow-hidden">
        <CircularProgressbarWithChildren
          value={satisfactionRate}
          circleRatio={0.5}
          text={``}
          minValue={0}
          maxValue={100}
          styles={buildStyles({
            rotation: 0.75, // Start angle of 135 degrees
            strokeLinecap: "round",
            trailColor: "#EAEAFD",
            pathColor: "#4A4DE6",
            textColor: "#4A4DE6",
          })}
        >
          <div className="relative" style={{ width: "78%", height: "78%" }}>
            <CircularProgressbarWithChildren
              value={100}
              text={``}
              minValue={0}
              maxValue={100}
              strokeWidth={1}
              circleRatio={0.5}
              styles={buildStyles({
                rotation: 0.75,

                trailColor: "white",
                pathColor: "#4A4DE6",
                textColor: "",
              })}
            >
              <RadialSeparators
                count={45}
                style={{
                  background: "white",

                  width: "12px",

                  height: `${2}%`,
                }}
              />
            </CircularProgressbarWithChildren>

            <div className={styles.rate_number}>
              <p className={styles.p_rate_number}>{`${satisfactionRate}%`}</p>
              <p className={styles.p_rate_text}>Based on likes</p>
            </div>
            <p className={styles.zero}>0%</p>
            <p className={styles.onehundred}>100%</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </Box>
  );
};

export default Rate;
