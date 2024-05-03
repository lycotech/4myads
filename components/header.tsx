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
    <div>
      <aside>
        {/* Logo Column */}
        <div className="flex pt-4 pb-1">
          <Link href="/">
            <img src="logo.png" alt="4myads Concept" className="h-10 w-50 mr-2" />
          </Link>
        </div>

      </aside>
    

    <nav className="flex-1 space-x-4 justify-between mb-4 items-center pt-2 pb-0 px-5 h-20 navbar bg-base-100">
    {/* Menu Column */}
     <div className="flex-grow w-7/12 px-0">
      <ul className="flex space-x-8 justify-center items-center menu menu-horizontal  md:font-bold font-lato">
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
     
     
     </nav>
     </div>
     
  );
}
