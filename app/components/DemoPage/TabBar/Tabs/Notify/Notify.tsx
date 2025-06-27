import styles from './notify.module.css'

const fields = [
    "teacherName",
    "absentTeacher",
    "period",
    "courseCode",
    "subject",
    "room",
    "date",
    "startTime",
    "endTime",
    "duration",
    "schoolName",
    "schoolAddress",
    "schoolPhone",
    "schoolLogo",
    "coverageContactName",
    "coverageContactTitle",
    "coverageContactEmail",
    "coverageContactPhone"
];


export default function Notify() {
    return (
        <>
            <div className='card'>
                <h3>Coverage Notifications</h3>
                <p>Send notifications to teachers about their coverage assignments</p>
                <label>Email Template</label>
                <textarea
                    className={`input-text textarea ${styles.textarea}`}
                    rows={20}
                    defaultValue={`Subject: Coverage Assignment - {date}

{schoolLogo}

{schoolName}
{schoolAddress}
Phone: {schoolPhone}

Dear {teacherName},

You have been assigned coverage for the following period:

Date: {date}
Period: {period} ({startTime} - {endTime})
Course: {courseCode}
Room: {room}
Covering for: {absentTeacher}

Period Details:
- Start Time: {startTime}
- End Time: {endTime}
- Duration: {duration} minutes
- Course Code: {courseCode}

Please arrive at the classroom a few minutes early. If you have any questions or concerns, please contact the main office immediately.

If you have questions about this coverage assignment, please contact:
{coverageContactName} ({coverageContactTitle})
Email: {coverageContactEmail}
Phone: {coverageContactPhone}

Thank you for your flexibility and support.

Best regards,
{coverageContactName}
{coverageContactTitle}
{schoolName}
`}
                />
                <p>Available merge fields:</p>
                <div className={styles.field}>
                    {fields.map((field) => (
                        <p className='chip' key={field}>{`{${field}}`}</p>
                    ))}
                </div>
            </div>
        </>
    )
}