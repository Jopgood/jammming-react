import React from "react";
import SearchBar from "./search-bar/search-bar";
import SearchButton from "./search-button/search-button";
import { useState } from "react";

export default function SearchContainer() {
  const [search, setSearch] = useState("");

  function handleSearch() {
    console.log(search);
  }

  return (
    <div>
      <SearchBar value={search} onChange={setSearch()} />
      <SearchButton onClick={handleSearch()} />
    </div>
  );
}
