import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PortFolio</div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
  <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
  <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
  <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
</ul>


      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
