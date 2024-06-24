import { Nav } from '../../components';
import './Header.css';

export default function Header(){

  return(
    <header>
      {/* Lupine Creative Logo */}
      <img id='logo' src='/logo_branding/lupinecreativenew.svg' alt='Lupine Creative Logo' />
      <Nav />
    </header>
  )
}
