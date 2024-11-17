import Link from "next/link";
import styles from "./box.module.css";
interface boxInput {
  title: string;
  des: string;
  children: JSX.Element;
}
export default function Box({ title, des, children }: boxInput) {
  return (
    <div className={styles.container}>
      <div className="p-5">
        <div className="w-full flex flex-col gap-3 items-start">
          <p className="text-base font-medium text-[#181819E5]/[0.9]">
            {title}
          </p>
          <p className="text-sm font-normal text-[#1818196B]">{des}</p>
        </div>
      </div>

      <div>
        {children}
        <div className="px-5 relative min-h-14 flex justify-end items-center before:absolute before:right-0 before:top-0 before:h-[1px] before:bg-[#E6E7E9] before:w-full ">
          <Link href={""}>
            <p className="text-[#4A4DE6] font-medium gap-2 flex items-center">
              Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-[18px] text-[#4A4DE6] mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
