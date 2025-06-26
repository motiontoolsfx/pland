import Link from 'next/link';
import styles from './header.module.css'
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className='page-width'>
                <Link href="/" className={styles.iconLink}><div><AcademicCapIcon /></div>PlanD</Link>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/demo">Demo</Link>
                </div>
                <button className='btn-solid'>Contact</button>
            </nav>
        </header >
    );
}
