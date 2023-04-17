import Link from 'next/link';
import styles from '@components/styles/navigation.module.css';
const Navigation = () => {
  return (
    <div className={styles.navigationBar}>
      <h1>Money Tracker</h1>
      
      <div className={styles.breadCrumb}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/analysis">Analysis</Link>
          </li>
          <li>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
