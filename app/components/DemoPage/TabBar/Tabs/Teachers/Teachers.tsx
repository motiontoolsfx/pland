'use client';

import { PencilSquareIcon } from '@heroicons/react/24/outline';
import React from 'react';

import styles from './teachers.module.css'

type Department =
    | 'Math'
    | 'Science'
    | 'English'
    | 'Social Studies'
    | 'Physical Education'
    | 'Art'
    | 'Music'
    | 'Foreign Language'
    | 'Special Education'
    | 'Technology'
    | 'Health'
    | 'Library / Media'
    | 'Other';

const departmentColors: Record<Department, number> = {
    Math: 210,
    Science: 120,
    English: 30,
    'Social Studies': 15,
    'Physical Education': 45,
    Art: 300,
    Music: 270,
    'Foreign Language': 180,
    'Special Education': 0,
    Technology: 195,
    Health: 75,
    'Library / Media': 255,
    Other: 0,
};

type SubData = {
    teacher: string;
    email: string;
    department: Department | string;
    course: string;
    room: string;
    load: string;
    nonTeaching: string;
};

const subsData: SubData[] = [
    {
        teacher: 'Sub Smith',
        email: 'subsmith@example.com',
        department: 'Math',
        course: 'ENV101',
        room: '101',
        load: '6 periods',
        nonTeaching: 'No',
    },
    {
        teacher: 'Sub Jones',
        email: 'subjones@example.com',
        department: 'English',
        course: 'PIANO101',
        room: '202',
        load: '4 periods',
        nonTeaching: 'No',
    },
    {
        teacher: 'Sub Davis',
        email: 'subdavis@example.com',
        department: 'Social Studies',
        course: 'ENG102',
        room: '303',
        load: '5 periods',
        nonTeaching: 'Yes',
    },
];

export default function Teachers() {
    return (
        <>
            <div className="card">
                <h3>Substitute Pool</h3>
                <p>Available substitutes and their details</p>
                <table>
                    <thead>
                        <tr>
                            <th>Teacher</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Course | Room</th>
                            <th>Load</th>
                            <th>Non-Teaching</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subsData.map((sub, index) => (
                            <tr key={index}>
                                <td>{sub.teacher}</td>
                                <td>{sub.email}</td>
                                <td>
                                    <p
                                        className='chip'
                                        style={{
                                            background: `hsl(${departmentColors[sub.department as Department] ?? departmentColors.Other} 60%, 80%)`,
                                            color: `hsl(${departmentColors[sub.department as Department] ?? departmentColors.Other} 60%, 20%)`
                                        }}
                                    >
                                        {sub.department}
                                    </p>
                                </td>
                                <td><p className={`${styles.courseChip} chip`}>{`${sub.course} | ${sub.room}`}</p></td>
                                <td>{sub.load}</td>
                                <td>{sub.nonTeaching}</td>
                                <td>
                                    <button className="iconBtn">
                                        <PencilSquareIcon />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    );
}
