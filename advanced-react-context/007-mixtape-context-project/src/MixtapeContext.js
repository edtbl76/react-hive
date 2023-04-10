import React, {useMemo, useState} from "react";

export const MixtapeContext = React.createContext();

export const MixtapeProvider = ({ children, songs }) => {

  const [genre, setGenre] = useState("all");
  const [sortOrder, setSortOrder] = useState("ascending");

  const memo =
      useMemo(() =>
          ({songs, genre, setGenre, sortOrder, setSortOrder}), [genre, songs, sortOrder])
  return (
    <MixtapeContext.Provider value={memo}>
        {children}
    </MixtapeContext.Provider>
  );
}
