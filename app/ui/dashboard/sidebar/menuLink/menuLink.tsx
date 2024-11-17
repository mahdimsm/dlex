"use client"
import Link from "next/link";
import  styles  from "./menuLink.module.css";
import { usePathname } from "next/navigation";
type Item={

    title:string;
    path:string;
    icon:JSX.Element;
}

const MenuLink = ({item}:any) => {
    const pathname=usePathname();
    return (
    <Link href={item.path} className={`${styles.container} ${pathname===item.path && styles.active}`}>
        {item.icon}
        {item.title}
        {item.title==='Chat'&&<div className="h-[19px] w-[19px] bg-[#FFA000] text-white flex justify-center items-center rounded-full absolute right-0">5</div> }
    </Link>  );
}
 
export default MenuLink;