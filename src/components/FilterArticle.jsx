const FilterArticle = ({
  searchParams,
  setSearchParams,
  order,
  setOrder,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleSortChange = (e) => {
    setSelectedCategory(e.target.value);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", e.target.value);
    setSearchParams(newParams);
  };

  const onOrderChange = (e) => {
    setOrder(e.target.value);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", e.target.value);
    setSearchParams(newParams);
  };

  return (
    <div className="filter-wrapper">
      <label htmlFor="filter">Filter by: </label>
      <select
        name="filter"
        id="filter"
        className="filter"
        onChange={handleSortChange}
        value={selectedCategory}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <div className="radio-order">
        <div className="radio-element">
          <input
            onChange={onOrderChange}
            type="radio"
            value="asc"
            name="order"
            id="asc-order"
            checked={order === "asc"}
          />
          <label htmlFor="asc-order">Asc</label>
        </div>
        <div className="radio-element">
          <input
            onChange={onOrderChange}
            type="radio"
            value="desc"
            name="order"
            id="desc-order"
            checked={order === "desc"}
          />
          <label htmlFor="desc-order">Desc</label>
        </div>
      </div>
    </div>
  );
};

export default FilterArticle;
