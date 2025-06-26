import styles from './benefits.module.css'

const benefits = [
    { title: 'Benefit 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Benefit 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Benefit 3', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Benefit 4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Benefit 5', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Benefit 6', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

export default function Benefits() {
    return (
        <div className={styles.section}>
            <div className='page-width'>
                <div className={styles.grid}>
                    {benefits.map((benefit, i) => (
                        <div className='card' key={i}>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
