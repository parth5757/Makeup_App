import React from 'react';
import './Footer.css'
import BrandLink from '../BrandLink';

const Footer = () => {
  const links =[
    'about',
    'skincare',
    'makeup',
    'supplements',
    'contact'
  ]

  return (
    <footer className='bg-dark text-light px-4 h-32 py-4'>
      <div className="flex justify-between">
      <BrandLink classes={"text-yellow"}/>

        <div>
          {links.map(link => (
            <a href="/" className="ml-4">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer;  