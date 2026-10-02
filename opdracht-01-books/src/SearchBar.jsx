function SearchBar({ value, onChange }) {
  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Zoek een boek..."
        value={value}
        onChange={onChange}
        className="border p-2 rounded"
      />
    </div>
  );
}

export default SearchBar;