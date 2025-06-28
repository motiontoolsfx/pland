import { teachers, subs } from "@/app/data/teachers";
import { PlusIcon } from "@heroicons/react/24/outline";

import styles from './absent.module.css'

export default function Absent() {
    return (
        <>
            <div className="card">
                <h3>Absent</h3>
                <p>Set teacher absences</p>

                <div className={styles.grid}>
                    <label>
                        Staff Member
                        <select>
                            {teachers.map((t, index) => (
                                <option key={index} value={t.teacher.name}>
                                    {t.teacher.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Absence Length
                        <select>
                            <option value="Full Day">Full Day</option>
                            <option value="Half Day (AM)">Half Day (AM)</option>
                            <option value="Half Day (PM)">Half Day (PM)</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </label>
                    <label>
                        <input type="checkbox" name="no_substitute_needed" />
                        No substitute needed
                    </label>
                    <span />
                    <label>
                        Assign Substitute (Optional)
                        <select>
                            {subs.map((s, index) => (
                                <option key={index} value={s.sub.name}>
                                    {s.sub.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <span />
                    <button className="btn-solid btn-icon">
                        <PlusIcon className="icon" />
                        Add Absent Staff
                    </button>
                </div>
            </div>
            <div className="card">
                <h3>Absent Staff</h3>
                <p>Staff members requiring coverage today</p>
            </div>
        </>
    );
}
