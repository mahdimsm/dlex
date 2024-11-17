
import Box from "../box/box";

export default function Seg() {
  return (
    <Box title={"Segmentation"} des={"All users"}>
      <div className="flex justify-between items-end p-5">
        <div>
          <ul className="list-disc font-medium text-xs ml-3">
            <li className="text-[#919294] my-[1.25rem]">Not specified</li>
            <li className="text-[#CACCF7] my-[1.25rem]">Male</li>
            <li className="text-[#828AED] my-[1.25rem]">Female</li>
            <li className="text-[#4A4DE6] my-[1.25rem]">Other</li>
          </ul>
        </div>
        <div className=" flex flex-col">
          <div className="h-[65px] w-14 rounded-lg bg-[#F0F1F2]  mt-[-30px]"></div>
          <div className="h-[65px] w-14 rounded-lg bg-[#CACCF7]  mt-[-30px]"></div>
          <div className="h-[65px] w-14 rounded-lg bg-[#828AED]  mt-[-30px]"></div>
          <div className="h-[65px] w-14 rounded-lg bg-[#4A4DE6] mt-[-30px] "></div>
        </div>
      </div>
    </Box>
  );
}
