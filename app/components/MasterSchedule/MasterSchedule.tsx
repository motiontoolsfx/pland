import { useState } from "react";
import { teachers } from "@/app/data/teachers";

import styles from './masterSchedule.module.css'

export default function MasterSchedule() {
    const [activeTab, setActiveTab] = useState("A");

    const periodsA = ["1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A"];
    const periodsB = ["1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B"];

    const periods = activeTab === "A" ? periodsA : periodsB;

    return (
        <div className="card">
            <div className="tabs">
                <button onClick={() => setActiveTab("A")} className={activeTab === "A" ? "active" : ""}>
                    A Day
                </button>
                <button onClick={() => setActiveTab("B")} className={activeTab === "B" ? "active" : ""}>
                    B Day
                </button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Teacher</th>
                            <th>Department</th>
                            <th>Room</th>
                            {periods.map((period) => (
                                <th key={period}>{period}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(({ teacher }, index) => (
                            <tr key={index}>
                                <td>{teacher.name}</td>
                                <td>{teacher.department}</td>
                                <td>{teacher.room}</td>
                                {periods.map((period, i) => {
                                    // For A day, show schedule[i]; for B day, show schedule[i + 9]
                                    const scheduleIndex = activeTab === "A" ? i : i + 9;
                                    const scheduleItem = teacher.schedule ? teacher.schedule[scheduleIndex] : "";
                                    return <td key={period}><span className='chip' style={{ backgroundColor: "var(--background)" }}>{scheduleItem || ""}</span></td>;
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
