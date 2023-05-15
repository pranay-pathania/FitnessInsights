import styles from './Navbar.module.css'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Navbar: React.FC<{}> = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return <>
    <nav className={styles.navbar}>
      <div className={styles.logo_div}>
        <p className={styles.logo_heading}>FITNESS INSIGHT</p>
      </div>

      <div className={styles.desktop_links}>
        <Link href="/" className={styles.navbar_links}>HOME</Link>
        <Link href="/" className={styles.navbar_links}>EXPLORE</Link>
        <Link href="/" className={styles.navbar_links}>ABOUT</Link>
        <Link href="/" className={styles.navbar_links}>FEEDBACK</Link>
      </div>

      <div className={styles.visible_when_collapsed}>
        <div className={styles.mobile_expandable_button} onClick={toggleMenu}>
          {isMobileMenuOpen ? <AiOutlineClose size='48' /> : <BiMenu size='48' />}
          
        </div>
        <div className={styles.mobile_links}>
          <Link href="/" className={styles.navbar_links}>HOME</Link>
          <Link href="/" className={styles.navbar_links}>EXPLORE</Link>
          <Link href="/" className={styles.navbar_links}>ABOUT</Link>
          <Link href="/" className={styles.navbar_links}>FEEDBACK</Link>
        </div>
      </div>

    </nav>
  </>
}

export default Navbar