import { Link } from 'react-router-dom'
import './Footer.css';

export default function Footer() {

  return (
    <footer>
      <form id='newsletter'>
        <label className='news-label' htmlFor="news-email" >Subscribe to Lupine Creative Newsletters!</label>
        <div>
          <input placeholder='Email' id='news-email' className='input' name="news-email" type="email" required />
          <button id='news-btn' type='submit'>&#x2192;</button>
        </div>
      </form>
      <a href='https://www.instagram.com'><img src='/logo_branding/insta_logo_light.png' alt='instagram logo' id='insta-logo' /></a>
    </footer>
  )
}