import { useEffect } from "react";

export const Thought = (props) => {
    const { thought, removeThought } = props;

    if (!thought.text) {
        throw Error("No thoughts?")
    }

    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    useEffect(() => {
        const timesUp = setTimeout(() => {
            removeThought(thought.id);
        }, thought.expiresAt - Date.now())

        return () => {
            clearTimeout(timesUp)
        }
    }, [thought, removeThought])

    return (
        <li className="Thought">
            <button
                aria-label="Remove thought"
                className="remove-button"
                onClick={handleRemoveClick}
            >
                &times;
            </button>
            <div className="text">{thought.text}</div>
        </li>
    );
}