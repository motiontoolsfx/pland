import Link from 'next/link';
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className='page-width'>
                <Link href="/">Plan D</Link>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/demo">Demo</Link>
                </div>
                <button className='btn-solid'>Contact</button>
            </nav>
        </header >
    );
}
