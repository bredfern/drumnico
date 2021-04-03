import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon alt ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Highlights</li>
        <li>
          Design: <a href="https://brianredfern.com">Brian Redfern</a>
        </li>
        <li>
         Copyright 2021 <a href="#">Nico Spezzacatena</a>
        </li>
      </ul>
    </footer>
  );
}
