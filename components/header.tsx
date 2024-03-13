'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FaFacebook, FaInstagram,  FaShareAlt, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Header() {
  const currentPath = usePathname();
  
  const links = [
    { label: 'Home ', href:'/'},
    { label: 'About ', href:'/'},
    { label: 'All Ads ', href:'/'},
    { label: 'Contact ', href:'/'}
  ]


  return (
    <nav className="flex-1 space-x-6 justify-between mb-5 items-center py-4 px-5 h-20 navbar bg-base-100">
     
     {/* Logo Column */}

     <div className="flex items-center">
      <Link href="/">
      <img src="logo.png" alt="4myads Concept" className="h-10 w-50 mr-2" />
      </Link>
      
     </div>


     {/* Menu Column */}
     <div className="flex-grow w-7/12 px-10">
      <ul className="flex space-x-20 justify-center items-center menu menu-horizontal ">
        {links.map(link => 
        <Link key={link.href} 
        className={classNames({
          'text-green-950':link.href === currentPath,
          'text-green-500': link.href !== currentPath,
          'hover:text-zinc-800 transition-colors': true
        })} 
        href={link.href}>{link.label}</Link> )}
      


      </ul>
     </div>

     {/* Social Media */}
     <div className="flex-grow space-x-4">
     <Link href="https://web.facebook.com/4myads/" ><FaFacebook /></Link>
     <Link href="https://twitter.com/4myads" ><FaXTwitter /></Link>
     <Link href="https://instagram.com/4myadsOfficial/" ><FaInstagram /></Link>
     <FaShareAlt />
     <FaWhatsapp />
     </div>

     {/* Add Post*/}
     <div className="flex-grow">
      Add Post Button
     </div>
     
     </nav>
  );
}
