'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => (pathname === path ? `${styles.active} ${styles.link}` : styles.link);

    return (
        <header className={styles.header}>
            <nav className="page-width">
                <Link href="/" className={styles.iconLink}>
                    <div><AcademicCapIcon /></div>PlanD
                </Link>
                <div>
                    <Link href="/" className={isActive('/')}>Home</Link>
                    <Link href="/demo" className={isActive('/demo')}>Live Demo</Link>
                </div>
                <button className="btn-solid">Contact</button>
            </nav>
        </header>
    );
}
