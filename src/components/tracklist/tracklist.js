import resultsStyles from "../search-results/Results.module.css";
import trackStyles from "../track/Track.module.css";
import styles from "./Tracklist.module.css";
import Track from "../track/track";
import { useState } from "react";

export default function TrackList({ tracks, onTrackChange }) {
  const [title, setTitle] = useState("");

  return (
    <div className={resultsStyles.container}>
      <h1 className={resultsStyles.header}>
        <input
          className={styles.input}
          value={title}
          placeholder="playlist name"
          onChange={(e) => setTitle(e.target.value)}
        />
      </h1>
      <ul className={resultsStyles.list}>
        {tracks.length > 0 &&
          tracks.map((track) => (
            <li key={track.id} className={trackStyles.track}>
              <Track track={track} onTrackChange={onTrackChange} />
            </li>
          ))}
      </ul>
    </div>
  );
}
