import { Minus, Plus } from "lucide-react";
import styles from "./Track.module.css";

export default function Track({ track, isResult = false, onTrackChange }) {
  return (
    <>
      <div className={styles.trackContent}>
        <p className={styles.trackTitle}>{track.name}</p>
        <p className={styles.trackSubtitle}>{track.artists[0].name}</p>
      </div>
      {isResult ? (
        <Plus
          className={styles.trackIcon}
          onClick={() => onTrackChange(track, "add")}
        />
      ) : (
        <Minus
          className={styles.trackIcon}
          onClick={() => onTrackChange(track, "remove")}
        />
      )}
    </>
  );
}
