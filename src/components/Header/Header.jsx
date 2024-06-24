import { Shopping } from '../../components';
import './Header.css';

export default function Header(){

  return(
    <>
    {/* Announcement bar */}
    <aside id='announcement-bar'>
      Announcement
    </aside>
    <header>
      {/* Lupine Creative Logo */}
      <img id='logo' src='/logo_branding/lupinecreativenew.svg' alt='Lupine Creative Logo' />
      {/* <Nav /> */}
      <Shopping />
    </header>
    </>
  )
}
