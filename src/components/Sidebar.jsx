import { sizes } from '../data/products'

export default function Sidebar({ selectedSizes, onToggleSize }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__group">
        <h3 className="sidebar__title">Size</h3>
        <ul className="sidebar__list">
          {sizes.map((size, i) => (
            <li key={`${size.label}-${i}`}>
              <label className="sidebar__option">
                <input
                  type="checkbox"
                  checked={selectedSizes.includes(`${size.label}-${i}`)}
                  onChange={() => onToggleSize(`${size.label}-${i}`)}
                />
                {size.label} ({size.count})
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__group">
        <h3 className="sidebar__title">Product type</h3>
        <ul className="sidebar__list">
          <li className="sidebar__option sidebar__option--static">A line Suits (2)</li>
        </ul>
      </div>
    </aside>
  )
}
