'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Header() {
  const currentPath = usePathname();
  
  const links = [
    { label: 'Home ', href:'/'},
    { label: 'About ', href:'/'},
    { label: 'All Ads ', href:'/'},
    { label: 'Contact ', href:'/'}
  ]


  return (
    <nav className="flex space-x-6 justify-between mb-5 items-center py-4 px-5 h-20">
     
     {/* Logo Column */}

     <div className="flex items-center">
      <Link href="/">
      <img src="logo.png" alt="4myads Concept" className="h-10 w-50 mr-2" />
      </Link>
      
     </div>


     {/* Menu Column */}
     <div className="flex-grow">
      <ul className="flex space-x-6 justify-center items-center">
        {links.map(link => 
        <Link key={link.href} 
        className={classNames({
          'text-zinc-950':link.href=== currentPath,
          'text-zinc-500': link.href !== currentPath,
          'hover:text-zinc-800 transition-colors': true
        })} 
        href={link.href}>{link.label}</Link> )}
      


      </ul>
     </div>

     {/* Social Media */}
     <div className="flex-grow">
      Social Media
     </div>

     {/* Add Post*/}
     <div className="flex-grow">
      Add Post Button
     </div>
     
     </nav>
  );
}
