export const ContactItem = ({ name, theme }) => {
    return (
        <div className={`theme-${theme}`}>
            {name} {theme === "dark" ? "🌑" : "☀"}
        </div>
    );
};