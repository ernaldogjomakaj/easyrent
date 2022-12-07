import styles from "./MainNavigation.module.css";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MainNavigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            src='https://easyrent.al/wp-content/uploads/2021/06/logo-web-02.svg'
            width='125 px'
            alt='Easy Rent Albania'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='main-nav'>
            <Link className={styles.navItem} href='/'>
              Rent
            </Link>
            <Link className={styles.navItem} href='#link'>
              Transfers
            </Link>
            <Link className={styles.navItem} href='#link'>
              Rental T&C
            </Link>
            <Link className={styles.navItem} href='#link'>
              Contact
            </Link>
            <Link className={styles.navItem} href='#link'>
              Help
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;

// const MainNavigation = () => {
//   return (
//     <div className={styles.mainheadercontainer}>
//       <div className={styles.mainwrapper}>
//         <div className={styles.logo}>
// <img
//   src='https://easyrent.al/wp-content/uploads/2021/06/logo-web-02.svg'
//   width='inherit'
//   height='inherit'
//   alt='Easy Rent Albania'
// />
//         </div>

//         <div className={styles.mainnav}>
//           <ul className={styles.leftposition}>
//             <li href='/'>Rent</li>
//             <li href='/Transfers'>Transfers</li>
//             <li>
//               Easy+ <span style={{ fontSize: 10 }}>Club</span>
//             </li>
//             <li>Manage Reservation</li>
//           </ul>

//           <ul className={styles.rightposition}>
//             <li>Account</li>
//             <li>
//               <select name='' id=''>
//                 <option value=''>EN</option>
//                 <option value=''>AL</option>
//                 <option value=''>IT</option>
//               </select>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
