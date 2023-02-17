import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from './assets/logo.webp'
import Linkedin from './assets/linkedin.webp'
function Footer() {
  const rights = 'All rights reserved'
  const [width, setWidth] = useState(0);
  const year = new Date().getFullYear();
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="footer p-5">
      
      <div className="footerColumns">
      <div className="footerCard"><Image
      src={Logo}
      width={'60'}
      style={{paddingBottom:20,}}/><div className='h1-footer'> 
      <h1>UNITED <br/>TECHNOLOGIES</h1>
      <p className='text-sm'>Somos una agencia creativa DevOps</p></div>
      </div>
      <div className="footerCard w-full">
        <ul className='leading-10 '>
          <li><b>Nosotros</b></li>
          <li>Servicios</li>
          <li>Contacto</li>
          <li>FAQ</li>
          <li>Blog</li>
        </ul>
        
      </div>
     {width > 550 && <div className="footerCard">
        <ul className='leading-10 text-sm'>
          <li><b>Legal</b></li>
          <li>Términos y Condiciones</li>
          <li>Política de privacidad</li>
          <li>Política de cookies</li>
          <li>Configuración de cookies</li>
        </ul></div>}
      <div className="footerCard text-sm w-full ">
        <ul className='leading-8'>
          {width > 550 && <li><b>Central de United Technologies, S.A.S</b></li>}
          {width < 550 && <li><b>Central de United Technologies, S.A.S</b></li>}
          <li>Medellín, Antioquía
COLOMBIA</li>
          <li>Tel: +1(772) 249 - 11 27</li>
          <li>email</li>
        </ul></div>
      </div>{width < 550 && <div className="">
        <ul className='leading-2 text-sm gap-3 footer-legal '>
          <li>Legal</li>
          <li>Términos y Condiciones</li>
          <li>Política de privacidad</li>
          <li>Política de cookies</li>
          <li>Configuración de cookies</li>
        </ul></div>}
      <div className="footer-row"> <a>{rights} by United Technologies. Copyright  {year}</a><div style={{width:'50px', height:'50px', margin:'10px', filter:'constrast(200%)'}}><Image src={Linkedin} ></Image></div></div>
    </div>

  );

}

export default Footer;