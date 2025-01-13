import { Minus, Plus } from "lucide-react";
import styles from "./Track.module.css";

export default function Track({ track, isResult = false }) {
  return (
    <>
      <div className={styles.trackContent}>
        <p className={styles.trackTitle}>{track.title}</p>
        <p className={styles.trackSubtitle}>{track.artist}</p>
      </div>
      {isResult ? (
        <Plus className={styles.trackIcon} />
      ) : (
        <Minus className={styles.trackIcon} />
      )}
    </>
  );
}
