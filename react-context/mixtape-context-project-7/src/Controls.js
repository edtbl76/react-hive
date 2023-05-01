import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";

export const Controls = () => {

    const { genre, sortOrder, setGenre, setSortOrder} = useContext(MixtapeContext);
    const handleChange = (e) => {
        setGenre(e.target.value);
    }

    return (
        <div className = "controls">
        <select onChange={(e) => handleChange(e)}>
            <option value="all">All</option>
            <option value="hip hop">Hip Hop</option>
            <option value="rap">Rap</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
        </select>

        <button onClick={() => setSortOrder(sortOrder === "ascending" ? "descending" : "Ascending")}>{sortOrder}</button>
        </div>
    );
};