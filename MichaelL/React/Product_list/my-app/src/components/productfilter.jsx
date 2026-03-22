function ProductFilter({ filterText, onFilterChange }) {
    return (
        <div className="mb-4">
            <div className="input-group">
                <span className="input-group-text bg-primary text-white">
                    <i className="bi bi-search">🔍</i>
                </span>
                <input
                    type="text"
                    className="form-control shadow-sm"
                    placeholder="Search products"
                    value={filterText}
                    onChange={(e) => onFilterChange(e.target.value)}
                />
            </div>

        </div>
    );
}

export default ProductFilter;