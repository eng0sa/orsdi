import React, { useState } from 'react';
import './header.css'
import { Col, Row } from 'react-bootstrap';
const AppNavbar = ({ title, subnavItems }) => {
const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

const handleMouseEnter = () => {
setIsSubMenuOpen(true);
};

const handleMouseLeave = () => {
setIsSubMenuOpen(false);
};

return (
    <div className='navbar'>
<div className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
{title}
{isSubMenuOpen && (
<div className="subnav">
{subnavItems.map((subNavItem) => (
<div key={subNavItem.id} className="subnav-item">
{subNavItem.title}
{subNavItem.submenunavItems && (
<div className="submenu">
{subNavItem.submenunavItems.map((submenuItem) => (
<div key={submenuItem.id} className="submenunav-item">
{submenuItem.title}
</div>
))}
</div>
)}
</div>
))}
</div>
)}
</div>

</div>
);
};
export default AppNavbar