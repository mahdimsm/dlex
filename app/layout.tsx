import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui/dashboard/sidebar/sidebar";
import Navbar from "./ui/dashboard/navbar/navbar";
import styles from "./layoutStyles.module.css";
import TopNavbar from "./ui/dashboard/topnavbar/topnavbar";
import TabBar from "./ui/dashboard/tabbar/tabbar";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Dlex App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
        <div className={styles.container}>
          <div className={styles.sidebar_parent}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <TopNavbar />
            <div className={styles.below_top_navbar_content}>
              <Navbar />
              {children}
            </div>
            <TabBar/>
          </div>
        </div>
      </body>
      
    </html>
  );
}
