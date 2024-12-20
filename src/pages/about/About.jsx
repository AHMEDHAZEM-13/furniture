import React, { useState } from 'react'
import Furniture from '../../components/furniture/Furniture'

export default function About() {
  // const catId = parseInt(useParams().id);
  const [showCount, setShowCount] = useState(16);
  const [sortOption, setSortOption] = useState("Default");
  return (
    <main>
      <Furniture/>
      <div className="bottom-section">
        <div className="filter-section">
          <button className="filter-button">Filter</button>
        </div>

        <div className="showing-section">
          <p>Showing 1-{showCount} of 32 results</p>
        </div>

        <div className="show-section">
          <label htmlFor="show-select">Show:</label>
          <select
            id="show-select"
            value={showCount}
            onChange={(e) => setShowCount(e.target.value)}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={64}>64</option>
          </select>
        </div>

        <div className="sort-section">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Default">Default</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>
    </main>
  )
}
