"use client";

import React from "react";

import styles from "./App.module.css";
import { useState } from "react";
import Form from "@/components/form/form";
import SearchResults from "@/components/search-results/search-results";
import TrackList from "@/components/tracklist/tracklist";

export default function Home() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [tracks, setTracks] = useState([]);

  const handleSearch = (value) => {
    setValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    try {
      // Get Spotify access token
      const authData = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
      });

      const authResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: authData,
        }
      );

      const { access_token } = await authResponse.json();

      if (!access_token) {
        throw new Error("Failed to authenticate with Spotify");
      }

      // Search for tracks
      const searchResponse = await fetch(
        `https://api.spotify.com/v1/search?${new URLSearchParams({
          q: value,
          type: "track",
          limit: "20",
        })}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      if (!searchResponse.ok) {
        throw new Error("Failed to fetch tracks");
      }

      const { tracks } = await searchResponse.json();

      if (!tracks?.items) {
        throw new Error("Invalid track data received");
      }

      // Transform and set results
      setResults(
        tracks.items.map((track) => ({
          id: track.id,
          artists: track.artists,
          name: track.name,
        }))
      );
    } catch (error) {
      console.error("Search failed:", error.message);
      // You might want to set an error state here to show to the user
    }
  };

  function handleTrackChange(track, action) {
    if (action === "add") {
      if (tracks.some((item) => item.id === track.id)) return;
      setTracks((currentTracks) => [...currentTracks, track]);
    } else {
      setTracks((currentTracks) =>
        currentTracks.filter((item) => item.id !== track.id)
      );
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>App</h1>
      </header>
      <main className={styles.main}>
        <Form onSubmit={handleSubmit} onChange={handleSearch} value={value} />
        <div className={styles.body}>
          <SearchResults results={results} onTrackChange={handleTrackChange} />
          <TrackList
            tracks={tracks}
            setTracks={setTracks}
            onTrackChange={handleTrackChange}
          />
        </div>
      </main>
    </div>
  );
}
