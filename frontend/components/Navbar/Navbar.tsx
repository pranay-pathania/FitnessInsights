//IMPORTS 
import styles from './Navbar.module.css'
import Link from 'next/link'

import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import { useState, useEffect, useRef } from 'react'


// NAVBAR component
const Navbar: React.FC<{}> = () => {

  // controls state of collapsible menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // refers to the toggleable menu: nav_links_container
  const menuRef = useRef<HTMLDivElement>(null)

  // toggles menu state on clicking the menu button
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }



  // closes menu when clicking anywhere outside the menu
  useEffect(() => {

    // this was a problem to implement through TS. needed to change event type from React.MouseEvent to native MouseEvent
    const clickOutsideMenuHandler = (event: MouseEvent) => {
      let menu = event.target as HTMLDivElement
      if(!menuRef.current?.contains(menu)) {
        setIsMenuOpen(false)
      }
    }
    addEventListener('mousedown', clickOutsideMenuHandler)
    return () => {
      removeEventListener('mousedown', clickOutsideMenuHandler)
    }
  })



  // component return
  return <nav className={styles.navbar}>

    {/* contains the brand logo */}
    <div className={styles.logo_div}>
      <p className={styles.logo_heading}>FITNESS INSIGHTS</p>
    </div>


    {/* collapsible menu */}
    <div className={styles.collapse_menu}>

      {/* contains the navigation links */}
      <div className='nav_links_container' ref={menuRef}>
        <Link href="/" className={styles.navbar_links} onClick={toggleMenu}>HOME</Link>
        <Link href="/explore" className={styles.navbar_links} onClick={toggleMenu}>EXPLORE</Link>
        <Link href="/about" className={styles.navbar_links} onClick={toggleMenu}>ABOUT</Link>
        <Link href="/feedback" className={styles.navbar_links} onClick={toggleMenu}>FEEDBACK</Link>

        {/* style jsx for dynamic styling - toggling visibility of menu */}
        <style jsx>{`
              .nav_links_container{
                visibility: ${isMenuOpen ? 'visible' : 'hidden'};
                display: flex;
                flex-direction: column;
                height: 100vh;
                background: #000000;
                opacity: 0.8;
                position: absolute;
                right: -10px;
                top: 3em;
                width: 100%;
                padding: 2.5em 1em 0.5em 0.5em;
              }
          `}</style>
      </div>
      
      {/* toggle state of menu button */}
      <div className={styles.menu_expandable_button} onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size='48' /> : <BiMenu size='48' />}
      </div>

    </div>

  </nav>
}

export default Navbar