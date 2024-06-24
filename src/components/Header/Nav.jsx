import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Nav() {

  return (
    <nav>
      {/* Home tab */}
      <NavLink className="navbar" to="/" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>Home</NavLink>

      {/* Shop tab */}
      <NavLink reload="true" className="navbar" to="/shop" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>Shop</NavLink>

      {/* About Lupine Creative */}
      <NavLink className="navbar" to="/about" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>About</NavLink>

      {/* FAQs tab */}
      <NavLink className="navbar" to="/contact" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>FAQs</NavLink>

      {/* Contact tab */}
      <NavLink className="navbar" to="/contact" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>Contact</NavLink>

      <NavLink className='navbar' to='/checkout' reload='true'>
        <Badge badgeContent={total} color="secondary">
                    <img src='/logo.branding/shopping_light.png' alt='shopping bag' className="cartimg" />
                </Badge>
      </NavLink>
    </nav >
  )
}