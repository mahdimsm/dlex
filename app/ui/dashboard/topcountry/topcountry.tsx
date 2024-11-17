import Box from "../box/box";
import styles from "./topcountry.module.css";
import ReactCountryFlag from "react-country-flag";
export default function TopCountry() {
  const countryData = [
    { name: "Belgium", flag: "BE", favorites: "7.5K" },
    { name: "France", flag: "FR", favorites: "5.3K" },
    { name: "USA", flag: "US", favorites: "4.9K" },
    { name: "Germany", flag: "DE", favorites: "4.8K" },
  ];
  return (
    <Box title={"Top countries"} des={"Favorites"}>
      <ul className="w-full">
        {countryData.map((country, index) => (
          <li className={styles.listcountry} key={index}>
            <div className="flex pl-5">
              <ReactCountryFlag
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
                countryCode={country.flag}
                svg
              />
            </div>
            <div className=" w-full flex items-center justify-between pr-5">
              <span className="text-[#181819E5]/[0.9] text-sm font-normal">
                {country.name}
              </span>
              <span className="text-sm font-medium">{country.favorites}</span>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
}
