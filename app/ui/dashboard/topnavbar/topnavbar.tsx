"use client";
import styles from "./topnavbar.module.css";
import Image from "next/image";
import dlex from "@/public/dlex.png";
import person from "@/public/person.png";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import { createPortal } from "react-dom";
export default function TopNavbar() {
  return (
    <div className={styles.top_navbar}>
      <div className={styles.logo_nav}>
        <Image alt="Dlex" src={dlex} />
      </div>

      <button className={styles.profile_button}>
        <div className={styles.dots}>•••</div>
        <Image className={styles.profile_img} src={person} alt="Profile" />
      </button>
    </div>
  );
}
