"use client";

import React from "react";

import styles from "./App.module.css";
import { useState } from "react";
import Form from "@/components/form/form";
import SearchResults from "@/components/search-results/search-results";
import TrackList from "@/components/tracklist/tracklist";

export default function Home() {
  const [value, setValue] = useState("");
  const [results] = useState([]);

  const handleSearch = (value) => {
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted value: ", value);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>App</h1>
      </header>
      <main className={styles.main}>
        <Form onSubmit={handleSubmit} onChange={handleSearch} value={value} />
        <div className={styles.body}>
          <SearchResults results={results} />
          <TrackList
            tracks={[
              { id: 1, title: "Song A", artist: "Artist A" },
              { id: 2, title: "Song B", artist: "Artist B" },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
