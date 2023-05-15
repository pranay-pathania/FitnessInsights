//IMPORTS 
import styles from './Navbar.module.css'
import Link from 'next/link'

import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import { useState } from 'react'


// NAVBAR component
const Navbar: React.FC<{}> = () => {

  // controls state of collapsible menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // toggles menu state on clicking the menu button
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  // component return
  return <nav className={styles.navbar}>

    {/* contains the brand logo */}
    <div className={styles.logo_div}>
      <p className={styles.logo_heading}>FITNESS INSIGHT</p>
    </div>


    {/* collapsible menu */}
    <div className={styles.collapse_menu}>

      {/* contains the navigation links */}
      <div className='nav_links_container'>
        <Link href="/" className={styles.navbar_links}>HOME</Link>
        <Link href="/" className={styles.navbar_links}>EXPLORE</Link>
        <Link href="/" className={styles.navbar_links}>ABOUT</Link>
        <Link href="/" className={styles.navbar_links}>FEEDBACK</Link>

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