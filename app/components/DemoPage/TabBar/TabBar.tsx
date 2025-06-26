'use client'

import styles from './tabBar.module.css'
import { useState, JSX } from 'react'
import { CalendarIcon, UserMinusIcon, UserGroupIcon, UsersIcon, CpuChipIcon, Cog6ToothIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import MasterSchedule from '../../MasterSchedule/MasterSchedule'
import Dashboard from './Tabs/Dashboard/Dashboard'
import Subs from './Tabs/Subs/Subs'

type TabKey = 'dashboard' | 'schedule' | 'absent' | 'subs' | 'coverage' | 'logic' | 'settings'

const tabs: Record<TabKey, { label: string; icon: JSX.Element; component: JSX.Element }> = {
    dashboard: { label: "Dashboard", icon: <ChartBarIcon className={styles.icon} />, component: <Dashboard /> },
    schedule: { label: "Schedule", icon: <CalendarIcon className={styles.icon} />, component: <MasterSchedule /> },
    absent: { label: "Absent", icon: <UserMinusIcon className={styles.icon} />, component: <div>Absent Content</div> },
    subs: { label: "Subs", icon: <UserGroupIcon className={styles.icon} />, component: <Subs /> },
    coverage: { label: "Coverage", icon: <UsersIcon className={styles.icon} />, component: <div>Coverage Content</div> },
    logic: { label: "Logic", icon: <CpuChipIcon className={styles.icon} />, component: <div>Logic Content</div> },
    settings: { label: "Settings", icon: <Cog6ToothIcon className={styles.icon} />, component: <div>Settings Content</div> },
}

export default function TabBar() {
    const [activeTab, setActiveTab] = useState<TabKey>('dashboard')

    return (
        <div className='page-width'>
            <div className={styles.bar}>
                {Object.entries(tabs).map(([key, tab]) => (
                    <button
                        key={key}
                        className={`${styles.tabButton} ${key === activeTab ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab(key as TabKey)}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={styles.content}>
                {tabs[activeTab].component}
            </div>
        </div>
    )
}
