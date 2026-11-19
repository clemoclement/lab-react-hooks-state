export default function DarkModeToggle({ isDark, onToggle }) {
  return (
    <button onClick={onToggle}>
      {isDark ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}