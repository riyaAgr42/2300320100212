function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter("all")}>
        All
      </button>

      <button
        onClick={() => setFilter("placement")}
      >
        Placement
      </button>

      <button
        onClick={() => setFilter("result")}
      >
        Result
      </button>

      <button
        onClick={() => setFilter("event")}
      >
        Event
      </button>
    </div>
  );
}

export default FilterBar;