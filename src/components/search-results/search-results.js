import resultsStyles from "./Results.module.css";
import trackStyles from "../track/Track.module.css";
import Track from "../track/track";

export default function SearchResults({ results }) {
  return (
    <div className={resultsStyles.container}>
      <h1 className={resultsStyles.header}>Results</h1>
      <ul className={resultsStyles.list}>
        {results &&
          results.map((result) => (
            <li key={result.id} className={trackStyles.track}>
              <Track track={result} isResult />
            </li>
          ))}
      </ul>
    </div>
  );
}
