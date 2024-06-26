import { NavLink } from 'react-router-dom';
import { Shopping } from '../../components';
import Badge from '@mui/material/Badge';
import './Header.css';

export default function Nav() {

  return (
    <nav>
      {/* Home tab */}
      <NavLink className="navbar" to="/" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>Home</NavLink>

      {/* Shop tab */}
      <Shopping />

      {/* About Lupine Creative */}
      <NavLink className="navbar" to="/about" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>About</NavLink>

      {/* FAQs tab */}
      <NavLink className="navbar" to="/faqs" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>FAQs</NavLink>

      {/* Contact tab */}
      <NavLink className="navbar" to="/contact" style={({ isActive }) => {
        return isActive ? { textDecoration: 'underline' } : {};
      }}>Contact</NavLink>

      <NavLink className='navbar' to='/checkout' reload='true'>
        <Badge badgeContent={4} color="secondary">
          <img src='/logo_branding/shopping_light.png' alt='shopping bag' id="cartimg" />
        </Badge>
      </NavLink>
    </nav >
  )
}