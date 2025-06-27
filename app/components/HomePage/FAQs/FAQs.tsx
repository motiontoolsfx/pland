'use client';
import { useState } from 'react';
import styles from './faqs.module.css';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
    { question: "What is Next.js?", answer: "A React framework for production." },
    { question: "How do I use Next.js?", answer: "By creating pages and components." },
    { question: "Is Next.js SEO friendly?", answer: "Yes, it supports server-side rendering." },
    { question: "Can I use API routes in Next.js?", answer: "Yes, Next.js supports API routes." },
    { question: "Does Next.js support static site generation?", answer: "Yes, it supports SSG." },
    { question: "Is Next.js good for large projects?", answer: "Yes, it scales well for big apps." },
];

export default function FAQs() {
    const [openStates, setOpenStates] = useState<boolean[]>(faqs.map(() => false));

    const toggleFAQ = (index: number) => {
        setOpenStates(prev =>
            prev.map((open, i) => (i === index ? !open : open))
        );
    };

    return (
        <div className='page-width'>
            <h3>FAQs</h3>
            <div className={styles.faqs}>
                {faqs.map(({ question, answer }, i) => {
                    const isOpen = openStates[i];
                    return (
                        <div key={i} className={`${styles.card} card`} onClick={() => toggleFAQ(i)}>
                            <div className={styles.question}>
                                <h3>{question}</h3>
                                <ChevronDownIcon
                                    className={`${styles.icon} ${isOpen ? styles.open : ''}`}
                                />
                            </div>
                            {isOpen && <p className={styles.answer}>{answer}</p>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
