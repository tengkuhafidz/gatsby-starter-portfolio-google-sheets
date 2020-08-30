import React from 'react'
import { Link } from 'gatsby'

const Nav: React.FC = () => {
  const menuItems = ['projects', 'milestones']

  const renderMenu = () => {
    return menuItems.map((menuItem) => (
      <li className="mr-6" key={menuItem}>
        <Link className="text-blue-500 hover:text-blue-800" to={`/${menuItem}`}>
          {menuItem.toUpperCase()}
        </Link>
      </li>
    ))
  }

  return <ul className="flex justify-center py-8">{renderMenu()}</ul>
}

export default Nav
