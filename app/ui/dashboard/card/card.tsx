import styles from "./card.module.css";
import Image, { StaticImageData } from "next/image";

export interface Cardinput {
  image: string | StaticImageData;
  name: string;
  job: string;
  tasks: Tasksinput;
  money: number;
  asc: boolean;
}
interface Tasksinput {
  done: number;
  whole: number;
}

export default function Card({
  image,
  name,
  job,
  tasks,
  money,
  asc,
}: Cardinput) {
  const progress = (tasks.done / tasks.whole) * 100;
  return (
    <div className={styles.container}>
      <div className="flex items-start justify-between flex-wrap">
        <div className="flex gap-2 flex-wrap">
          <Image
            alt="person"
            src={image}
            style={{ width: "auto", height: "40px" }}
          />
          <div className="flex flex-col gap-1">
            <p className="text-[#181819E5]/[0.9] font-medium text-sm">{name}</p>
            <p className="text-[#1818196B]/[0.42] font-medium text-sm">{job}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 justify-items-center">
          {asc ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#4CAF50]"
            >
              <path
                fillRule="evenodd"
                d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#DD425A]"
            >
              <path
                fillRule="evenodd"
                d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p
            className={`font-medium text-base/[20px] ${
              asc ? "text-[#4CAF50]" : "text-[#DD425A]"
            }`}
          >{`$${money.toFixed(2)}`}</p>
        </div>
      </div>

      <div>
        <p className=" font-medium text-xs leading-[17px] text-[#181819B2]/[0.7]">
          {tasks.done} from {tasks.whole} tasks completed
        </p>
        <div className="w-[0.8] bg-[#F0F1F2] rounded-full h-[3px] mt-2.5">
          <div
            className="bg-gradient-to-r from-[#4A4DE6] to-[#60B0FA] h-1.5 rounded-l-full dark:bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
