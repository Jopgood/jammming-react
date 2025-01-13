import resultsStyles from "./Results.module.css";
import trackStyles from "../track/Track.module.css";
import Track from "../track/track";

export default function SearchResults({ results, onTrackChange }) {
  return (
    <div className={resultsStyles.container}>
      <h1 className={resultsStyles.header}>Results</h1>
      <ul className={resultsStyles.list}>
        {results.length > 0 &&
          results.map((result) => (
            <li key={result.id} className={trackStyles.track}>
              <Track track={result} isResult onTrackChange={onTrackChange} />
            </li>
          ))}
      </ul>
    </div>
  );
}
