import React, { useState } from "react";

export const MixtapeContext = React.createContext();

export const MixtapeProvider = ({ children, songs }) => {

  const [genre, setGenre] = useState("all");
  const [sortOrder, setSortOrder] = useState("ascending");

  return (
    <MixtapeContext.Provider value={{ songs, genre, setGenre, sortOrder, setSortOrder }}>
        {children}
    </MixtapeContext.Provider>
  );
}
