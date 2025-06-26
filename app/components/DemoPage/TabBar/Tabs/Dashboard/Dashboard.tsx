import styles from './dashboard.module.css'

export default function Dashboard() {
    return (
        <>
            <div className={styles.overview}>
                <div className='card'>
                    <p>Total Staff</p>
                    <p>47</p>
                    <p>Active teaching staff</p>
                </div>
                <div className='card'>
                    <p>Absent Today</p>
                    <p>3</p>
                    <p>Staff requiring coverage</p>
                </div>
                <div className='card'>
                    <p>Available Subs</p>
                    <p>8</p>
                    <p>Substitutes on call</p>
                </div>
                <div className='card'>
                    <p>Pending Coverage</p>
                    <p>2</p>
                    <p>Periods still unassigned</p>
                </div>
            </div>
            <div>
                <div className='card'>
                    <p>Assign Coverage</p>
                    <p>Run the AI-powered coverage assignment system</p>
                    <button className='btn-solid'>Start Assignment</button>
                </div>
            </div>
        </>
    )
}