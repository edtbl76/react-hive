import React, { useContext, useState, useEffect } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext";

const ascending = (a, b) => a.year - b.year;
const descending = (a, b) => b.year - a.year;

export const SongList = () => {
  // Your code here! ✨
  const { genre, sortOrder, songs } = useContext(MixtapeContext);

  const [filteredSongs, setFilteredSongs] = useState(songs);

  useEffect(() => {
    const newArr = [...songs];
    if (genre === "all") {

      // see javascript:S4043. This ensures that we are clear that the orig. value is altered.
      const sorted = [...newArr].sort(sortOrder === "ascending" ? ascending : descending);
      setFilteredSongs(sorted);

    } else {

      const filteredAndSorted = [...newArr]
          .filter((song) => song.genre === genre)
          .sort(sortOrder === "ascending" ? ascending : descending)

      setFilteredSongs(filteredAndSorted);
    }
  }, [songs, genre, sortOrder]);

  return (
    <>
      {filteredSongs.map((song) => (
        <Song {...song} key={song.name} />
      ))}
    </>
  );
};