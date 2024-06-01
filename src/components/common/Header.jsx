import React from 'react'

const Header = () => {
  const location = useLocation();

  // Function to determine if a NavLink should be active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div>
      <h1>Header Component</h1>
    </div>
  )
}

export default Header;
