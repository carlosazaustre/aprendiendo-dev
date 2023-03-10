import { COLOR_HEX, POSITION_WAVES } from "../utils/constants";
import styles from "./Wave.module.css";

export function Wave({ theme = "javascript", position = "down" }) {
  return (
    <svg
      id="svg"
      viewBox="0 0 1440 300"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.wave}
    >
      <path
        d="M 0,400 C 0,400 0,200 0,200 C 74.42820512820512,185.56410256410254 148.85641025641024,171.1282051282051 234,172 C 319.14358974358976,172.8717948717949 415.0025641025642,189.05128205128207 496,198 C 576.9974358974358,206.94871794871793 643.1333333333333,208.66666666666666 712,206 C 780.8666666666667,203.33333333333334 852.4641025641026,196.2820512820513 929,209 C 1005.5358974358974,221.7179487179487 1087.0102564102565,254.20512820512818 1173,256 C 1258.9897435897435,257.7948717948718 1349.4948717948719,228.8974358974359 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill={COLOR_HEX[theme]}
        fillOpacity="1"
        className={styles.waves}
        transform={`rotate(${POSITION_WAVES[position]} 720 200)`}
      ></path>
    </svg>
  );
}
