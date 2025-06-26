import Link from 'next/link';
import styles from './hero.module.css'

const YouTubeEmbed = ({ videoId }: { videoId: string }) => (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
    </div>
);

export default function Hero() {
    return (
        <div className='page-width'>
            <div className={styles.hero}>
                <div>
                    <div className={styles.text}>
                        <h1>Streamline Teacher Scheduling and Coverage with Ease.</h1>
                        <p>Automate absences, assign substitutes, balance teacher loads, and keep your school day running smoothly—all in one platform.</p>
                    </div>
                    <div className={styles.contact}>
                        <input className="input-text" placeholder="Email"></input>
                        <Link className="btn-outline" href={'/demo'}>Live Demo</Link>
                        <button className="btn-solid">Get Notified First When It Launches</button>
                        <small>We'll never share your data with anyone.</small>
                    </div>
                </div>
                <div>
                    <YouTubeEmbed videoId="sF80I-TQiW0" />
                </div>
            </div>
        </div>
    )
}