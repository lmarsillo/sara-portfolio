import resume from '../../assets/sara-nenada-resume.pdf';
import down_arrow from '../../assets/icons/arrow-drop-down-rounded.svg';
import download from '../../assets/icons/download-rounded.svg';
import img_menu from '../../assets/icons/hamburger-menu.svg';
import img_cross from '../../assets/icons/cross.svg';
import ResumeButton from '../ResumeButton/ResumeButton';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const MOBILE_WIDTH = 600;

const Navbar = () => {
  const [isProjectsShown, setProjectsShown] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    screenWidth <= MOBILE_WIDTH ? setMobile(true) : setMobile(false);
  }, [screenWidth]);

  const toggleProjectsList = () => setProjectsShown(!isProjectsShown);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const showMainNav =
    (isMobile && isMenuOpen) || !isMobile ? styles.visible : styles.hidden;

  return (
    <>
      <header className={styles.header}>
        <Link to='/'>
          <svg
            className={styles.logo}
            width='52'
            height='51'
            viewBox='0 0 52 51'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M44.9129 48.7891C41.7041 48.1922 38.6487 46.4556 35.9829 43.7134C33.0482 40.6946 31.1374 37.7054 25.7405 27.6908C24.9137 26.1565 23.7833 24.2094 23.2285 23.3638L22.2198 21.8265L22.1391 22.9865C21.9981 25.0116 21.9439 35.6767 22.07 36.578C22.2923 38.167 23.0839 39.2596 24.5534 40.006L25.3177 40.3941L23.6234 40.4328C22.6915 40.454 21.1281 40.454 20.1491 40.4328L18.3691 40.3941L18.8555 40.1646C19.8434 39.6984 20.4592 39.133 20.944 38.2467L21.4265 37.3649L21.4622 31.3754L21.4979 25.3858L21.0467 26.2808C17.6873 32.9439 6.04895 32.9881 2.93767 26.3496C0.35342 20.8357 3.69326 15.4999 10.0329 15.0141L11.2439 14.9213L10.1218 13.9914C3.14462 8.20985 7.08729 -0.177321 15.6363 2.26066C17.0928 2.67602 18.1099 2.6729 18.5798 2.2516C18.913 1.95286 18.5565 7.14886 18.1687 8.24321C18.1553 8.28109 17.9935 7.87832 17.8092 7.34821C16.7003 4.15892 14.8881 2.18478 13.0694 2.18478C10.1344 2.18478 8.53032 4.67438 9.81903 7.22952C10.5459 8.67077 11.7491 9.72562 16.7859 13.3378C17.5779 13.9058 18.8039 14.9398 19.5103 15.6357C20.2168 16.3315 21.187 17.1273 21.6665 17.404C24.565 19.0769 26.9023 21.4357 29.5077 25.3169C31.1845 27.8148 31.6218 28.6366 35.0764 35.7815L35.376 36.4011L35.4188 31.0311C35.4949 21.4923 35.3593 20.8873 32.8918 19.7509L32.1274 19.3989L35.5322 19.401L38.9371 19.4036L38.1329 19.8358C36.0108 20.9765 35.9492 21.2698 35.9492 30.2326V37.6171L36.7338 39.0745C40.4232 45.9269 43.5057 48.4795 48.1093 48.4941C49.6607 48.4988 49.9765 48.5669 49.9833 48.8966C49.987 49.0684 45.9551 48.983 44.9129 48.7891ZM14.4416 30.2757C16.7066 29.4354 18.0232 27.628 18.2788 25.0079C18.6078 21.6363 17.3801 19.6126 12.9491 16.2229L11.8373 15.3724L10.5926 15.4637C4.83573 15.8861 2.69413 24.4989 7.24758 28.9162C8.95352 30.5712 12.0618 31.1586 14.4416 30.2757Z' />
          </svg>
        </Link>

        <nav className={styles.navbar}>
          <button className={styles.mobileMenu} onClick={toggleMenu}>
            {!isMenuOpen ? (
              <img src={img_menu} alt='Touch to view page navigation menu.' />
            ) : (
              <img src={img_cross} alt='Touch to close page navigation menu.' />
            )}
          </button>
          <ul className={`${styles.mainNav} ${showMainNav}`}>
            <li>
              <Link to='/' onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about-me' onClick={() => setMenuOpen(false)}>
                About Me
              </Link>
            </li>
            <hr className={styles.separator} />
            <li
              className={styles.projects}
              onClick={toggleProjectsList}
              onMouseEnter={toggleProjectsList}
              onMouseLeave={toggleProjectsList}
            >
              <div className={styles.projectsTag}>
                <span>Projects</span>
                <img
                  src={down_arrow}
                  alt='Click or Hover to Show Projects'
                  className={
                    isProjectsShown ? styles.expanded : styles.collapsed
                  }
                />
              </div>
              <ul
                className={
                  isMobile || isProjectsShown
                    ? styles.projectsList
                    : styles.hidden
                }
              >
                <li>
                  <Link
                    to='/project-elms-learners'
                    onClick={() => setMenuOpen(false)}
                  >
                    eLMS for Learners
                  </Link>
                </li>
                <li>
                  <Link
                    to='/project-elms-admins'
                    onClick={() => setMenuOpen(false)}
                  >
                    eLMS for Admins
                  </Link>
                </li>
                <li>
                  <Link
                    to='/project-virtual-visit'
                    onClick={() => setMenuOpen(false)}
                  >
                    Virtual Visit Redesign
                  </Link>
                </li>
                <li>
                  <Link
                    to='/project-recipe-manage-app'
                    onClick={() => setMenuOpen(false)}
                  >
                    Recipe Manager App
                  </Link>
                </li>
                <li>
                  <Link
                    to='/project-grocery-delivery-app'
                    onClick={() => setMenuOpen(false)}
                  >
                    Grocery Delivery App
                  </Link>
                </li>
                <li>
                  <Link
                    to='/project-portfolio'
                    onClick={() => setMenuOpen(false)}
                  >
                    Portfolio Redesign
                  </Link>
                </li>
              </ul>
            </li>
            {isMobile ? (
              <ResumeButton className={styles.resume} />
            ) : (
              <li className={styles.resume}>
                <a href={resume} download='Sara_Nenada_Resume.pdf'>
                  <span>Resume</span>
                  <img src={download} alt='Download Resume' />
                </a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
