'use client';

import { PencilSquareIcon } from '@heroicons/react/24/outline';
import React from 'react';

const subsData = [
    {
        name: 'Sub Smith',
        availability: 'Any',
        maxLoad: '6 periods',
        qualifications: ['Math', 'Science'],
        contact: '555-1234',
        status: 'Available',
        actions: 'Assign'
    },
    {
        name: 'Sub Jones',
        availability: 'Any',
        maxLoad: '4 periods',
        qualifications: ['English'],
        contact: '555-5678',
        status: 'Available',
        actions: 'Assign'
    },
    {
        name: 'Sub Davis',
        availability: 'Any',
        maxLoad: '5 periods',
        qualifications: ['History', 'Social Studies'],
        contact: '555-9012',
        status: 'Assigned',
        actions: 'Assign'
    }
];

export default function Subs() {
    return (
        <>
            <div className='card'>
                <h3>Substitute Pool</h3>
                <p>Available substitutes and their qualifications</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Availability</th>
                            <th>Max Load</th>
                            <th>Qualifications</th>
                            <th>Contact</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subsData.map((sub, index) => (
                            <tr key={index}>
                                <td>{sub.name}</td>
                                <td>{sub.availability}</td>
                                <td>{sub.maxLoad}</td>
                                <td>{sub.qualifications.join(', ')}</td>
                                <td>{sub.contact}</td>
                                <td>{sub.status}</td>
                                <td><PencilSquareIcon /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
