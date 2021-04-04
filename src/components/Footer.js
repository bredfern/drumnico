import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="copyright">
        <li>
          Design: <a href="https://brianredfern.com">Brian Redfern</a>
        </li>
        <li>
         Copyright {new Date().getFullYear() + ''} <a href="#">Nico Spezzacatena</a>
        </li>
      </ul>
    </footer>
  );
}
